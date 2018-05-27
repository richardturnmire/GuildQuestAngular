using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Azure.KeyVault.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.AzureKeyVault;
using Microsoft.Extensions.DependencyInjection;
using System.IO;
using GuildQuestAngular.Utils;
using GuildQuestAngular.Models;
using Microsoft.EntityFrameworkCore;


namespace GuildQuestAngular
{
    public class Startup
    {
        public Startup(IConfiguration config, IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder();

            builder.SetBasePath(Directory.GetCurrentDirectory());

            if (env.IsDevelopment())
            {
                builder
                    .AddUserSecrets<EmailConfiguration>()
                    .AddUserSecrets<KeysClass.ApiKeys>()
                    .AddJsonFile("appsettings.development.json", optional: false);
            }

            builder.AddEnvironmentVariables();

            if (!env.IsDevelopment())
            {
                builder
                    .AddAzureKeyVault(
                        $"https://{config["vault"]}vault.vault.azure.net/",
                        config["ClientId"],
                        config["ClientSecret"],
                        new PrefixKeyVaultSecretManager(""))
                    .AddJsonFile("appsettings.json", optional: false);
            }

            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            var connection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<GuildCarsContext>(options => options.UseSqlServer(connection));

            services.AddHsts(options =>
            {
                options.MaxAge = TimeSpan.FromDays(100);
                options.IncludeSubDomains = true;
                options.Preload = true;
            });

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
            services.AddCors(options => options.AddPolicy("MyCors", policy => policy.AllowAnyOrigin()));
            services.AddSingleton<IEmailConfiguration>(Configuration.GetSection("EmailConfiguration").Get<EmailConfiguration>());
            services.AddTransient<IEmailService, EmailService>();
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddSingleton<KeysClass.IApiKeys>(Configuration.GetSection("APIKeys").Get<KeysClass.ApiKeys>());
            services.AddTransient<KeysClass.IKeyService, KeysClass.KeyService>();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
                app.UseHttpsRedirection();
            
            app.Use(async (context, next) =>
            {
                context.Response.Headers.Add(
                    "Content-Security-Policy",
                    "frame-ancestors 'self' https:   ; " +
                    "default-src 'self' https:   azure.net ; " +
                    "child-src 'self' https:  ; " +
                    "style-src 'self' blob: 'unsafe-inline' ; " +
                    "font-src 'self' https: data: ; " +
                    "script-src 'self' https: 'unsafe-eval' ; " +
                    "connect-src 'self' https: wss: ; " +
                    "img-src 'self' https: data: ; ");

                context.Response.Headers.Add(
                    "Strict-Transport-Security",
                    "max-age=86400; includeSubDomains");

                context.Response.Headers.Add("X-Frame-Options", "SAMEORIGIN");
                context.Response.Headers.Add("X-Xss-Protection", "1");
                await next();
            });
            }

            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseCors("MyCors");
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
                
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";
                spa.Options.StartupTimeout = new TimeSpan(0, 2, 0);
               
                if (env.IsDevelopment())
                {
                    // spa.UseAngularCliServer(npmScript: "start");
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }
            });
        }
        public class PrefixKeyVaultSecretManager : IKeyVaultSecretManager
        {
            private readonly string _prefix;

            public PrefixKeyVaultSecretManager(string prefix)
            {
                _prefix = $"{prefix}";
            }

            public bool Load(SecretItem secret)
            {
                // Load a vault secret when its secret name starts with the 
                // prefix. Other secrets won't be loaded.
                return secret.Identifier.Name.StartsWith(_prefix);
            }

            public string GetKey(SecretBundle secret)
            {
                // Remove the prefix from the secret name and replace two 
                // dashes in any name with the KeyDelimiter, which is the 
                // delimiter used in configuration (usually a colon). Azure 
                // Key Vault doesn't allow a colon in secret names.
                return secret.SecretIdentifier.Name
                    .Substring(_prefix.Length)
                    .Replace("--", ConfigurationPath.KeyDelimiter);
            }
        }
    }
}
