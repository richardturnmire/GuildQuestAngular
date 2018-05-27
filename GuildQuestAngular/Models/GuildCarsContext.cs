using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace GuildQuestAngular.Models
{
    public partial class GuildCarsContext : DbContext
    {
        public virtual DbSet<__MigrationHistory> __MigrationHistory { get; set; }
        public virtual DbSet<Addon> Addon { get; set; }
        public virtual DbSet<Addon_AddonRate> Addon_AddonRate { get; set; }
        public virtual DbSet<AddonRate> AddonRate { get; set; }
        public virtual DbSet<Amenity> Amenity { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<Bill> Bill { get; set; }
        public virtual DbSet<BillDetail> BillDetail { get; set; }
        public virtual DbSet<BodyStyle> BodyStyle { get; set; }
        public virtual DbSet<Contact> Contact { get; set; }
        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<ExteriorColor> ExteriorColor { get; set; }
        public virtual DbSet<Hotel> Hotel { get; set; }
        public virtual DbSet<Hotel_Location> Hotel_Location { get; set; }
        public virtual DbSet<InteriorColor> InteriorColor { get; set; }
        public virtual DbSet<Location> Location { get; set; }
        public virtual DbSet<Make> Make { get; set; }
        public virtual DbSet<MakeModel> MakeModel { get; set; }
        public virtual DbSet<Model> Models { get; set; }
        public virtual DbSet<PurchaseType> PurchaseType { get; set; }
        public virtual DbSet<Reservation> Reservation { get; set; }
        public virtual DbSet<Reservation_HotelLocation> Reservation_HotelLocation { get; set; }
        public virtual DbSet<Room> Room { get; set; }
        public virtual DbSet<Room_Addon> Room_Addon { get; set; }
        public virtual DbSet<Room_Amenity> Room_Amenity { get; set; }
        public virtual DbSet<Room_RoomPromotion> Room_RoomPromotion { get; set; }
        public virtual DbSet<Room_RoomRate> Room_RoomRate { get; set; }
        public virtual DbSet<RoomPromotion> RoomPromotion { get; set; }
        public virtual DbSet<RoomPromotion_RoomPromotionRate> RoomPromotion_RoomPromotionRate { get; set; }
        public virtual DbSet<RoomPromotionRate> RoomPromotionRate { get; set; }
        public virtual DbSet<RoomRate> RoomRate { get; set; }
        public virtual DbSet<RoomType> RoomType { get; set; }
        public virtual DbSet<Sale> Sale { get; set; }
        public virtual DbSet<Special> Special { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<TransmissionType> TransmissionType { get; set; }
        public virtual DbSet<Vehicle> Vehicle { get; set; }

        public GuildCarsContext(DbContextOptions<GuildCarsContext> options) : base(options)
        {
        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder, IConfiguration config)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        optionsBuilder.UseSqlServer(config.GetConnectionString("Default"));
        //    }
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<__MigrationHistory>(entity =>
            {
                entity.HasKey(e => new { e.MigrationId, e.ContextKey });
            });

            modelBuilder.Entity<Addon>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<Addon_AddonRate>(entity =>
            {
                entity.HasOne(d => d.Addon)
                    .WithMany(p => p.Addon_AddonRate)
                    .HasForeignKey(d => d.AddonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Addon_AddonRate_Addon");

                entity.HasOne(d => d.AddonRate)
                    .WithMany(p => p.Addon_AddonRate)
                    .HasForeignKey(d => d.AddonRateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Addon_AddonRate_AddonRate");
            });

            modelBuilder.Entity<Amenity>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<AspNetRoles>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("RoleNameIndex")
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedNever();
            });

            modelBuilder.Entity<AspNetUserClaims>(entity =>
            {
                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId");
            });

            modelBuilder.Entity<AspNetUserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey, e.UserId });

                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId");
            });

            modelBuilder.Entity<AspNetUserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId)
                    .HasName("IX_RoleId");

                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserId");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId");
            });

            modelBuilder.Entity<AspNetUsers>(entity =>
            {
                entity.HasIndex(e => e.UserName)
                    .HasName("UserNameIndex")
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedNever();
            });

            modelBuilder.Entity<Bill>(entity =>
            {
                entity.HasOne(d => d.Reservation)
                    .WithMany(p => p.Bill)
                    .HasForeignKey(d => d.ReservationId)
                    .HasConstraintName("FK_Bill_Reservation");
            });

            modelBuilder.Entity<BillDetail>(entity =>
            {
                entity.HasKey(e => new { e.BillId, e.BillDetailId });

                entity.Property(e => e.Description).IsUnicode(false);

                entity.HasOne(d => d.Bill)
                    .WithMany(p => p.BillDetail)
                    .HasForeignKey(d => d.BillId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BillDetail_Bill");
            });

            modelBuilder.Entity<BodyStyle>(entity =>
            {
                entity.HasIndex(e => e.BodyStyle1)
                    .HasName("IX_BodyStyle")
                    .IsUnique();

                entity.Property(e => e.BodyStyleID).ValueGeneratedNever();

                entity.Property(e => e.BodyStyle1).IsUnicode(false);
            });

            modelBuilder.Entity<Customers>(entity =>
            {
                entity.Property(e => e.Address1).IsUnicode(false);

                entity.Property(e => e.Address2).IsUnicode(false);

                entity.Property(e => e.City).IsUnicode(false);

                entity.Property(e => e.CustomerName).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.Phone).IsUnicode(false);
            });

            modelBuilder.Entity<ExteriorColor>(entity =>
            {
                entity.HasIndex(e => e.ExteriorColor1)
                    .HasName("IX_ExteriorColor")
                    .IsUnique();

                entity.Property(e => e.ExteriorColorID).ValueGeneratedNever();

                entity.Property(e => e.ExteriorColor1).IsUnicode(false);
            });

            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.Property(e => e.HotelId).ValueGeneratedNever();

                entity.Property(e => e.HotelName).IsUnicode(false);
            });

            modelBuilder.Entity<Hotel_Location>(entity =>
            {
                entity.Property(e => e.HotelLocationId).ValueGeneratedNever();

                entity.HasOne(d => d.Hotel)
                    .WithMany(p => p.Hotel_Location)
                    .HasForeignKey(d => d.HotelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Hotel_Location_Hotel");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.Hotel_Location)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Hotel_Location_Location");
            });

            modelBuilder.Entity<InteriorColor>(entity =>
            {
                entity.Property(e => e.InteriorColorID).ValueGeneratedNever();

                entity.Property(e => e.InteriorColor1).IsUnicode(false);
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.Property(e => e.Address1).IsUnicode(false);

                entity.Property(e => e.Address2).IsUnicode(false);

                entity.Property(e => e.City).IsUnicode(false);

                entity.Property(e => e.LocationName).IsUnicode(false);

                entity.Property(e => e.ZipCode).IsUnicode(false);
            });

            modelBuilder.Entity<Make>(entity =>
            {
                entity.Property(e => e.MakeID).ValueGeneratedNever();
            });

            modelBuilder.Entity<MakeModel>(entity =>
            {
                entity.HasIndex(e => new { e.MakeID, e.ModelID })
                    .HasName("IX_MakeModel")
                    .IsUnique();

                entity.Property(e => e.MakeName).IsUnicode(false);

                entity.Property(e => e.ModelName).IsUnicode(false);

                entity.HasOne(d => d.Make)
                    .WithMany(p => p.MakeModel)
                    .HasForeignKey(d => d.MakeID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MakeModel_Make");

                entity.HasOne(d => d.Model)
                    .WithMany(p => p.MakeModel)
                    .HasForeignKey(d => d.ModelID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MakeModel_Model");
            });

            modelBuilder.Entity<Model>(entity =>
            {
                entity.Property(e => e.ModelID).ValueGeneratedNever();
            });

            modelBuilder.Entity<Reservation>(entity =>
            {
                entity.Property(e => e.CreditCard).IsUnicode(false);

                entity.Property(e => e.Description).IsUnicode(false);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Reservation)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_Customers");
            });

            modelBuilder.Entity<Reservation_HotelLocation>(entity =>
            {
                entity.HasKey(e => new { e.ReservationId, e.HotelLocationId });

                entity.HasOne(d => d.HotelLocation)
                    .WithMany(p => p.Reservation_HotelLocation)
                    .HasForeignKey(d => d.HotelLocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_HotelLocation_Hotel_Location");

                entity.HasOne(d => d.Reservation)
                    .WithMany(p => p.Reservation_HotelLocation)
                    .HasForeignKey(d => d.ReservationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_HotelLocation_Reservation");
            });

            modelBuilder.Entity<Room>(entity =>
            {
                entity.HasOne(d => d.HotelLocation)
                    .WithMany(p => p.Room)
                    .HasForeignKey(d => d.HotelLocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_Hotel_Location");

                entity.HasOne(d => d.RoomType)
                    .WithMany(p => p.Room)
                    .HasForeignKey(d => d.RoomTypeId)
                    .HasConstraintName("FK_Room_RoomType");
            });

            modelBuilder.Entity<Room_Addon>(entity =>
            {
                entity.HasOne(d => d.Addon)
                    .WithMany(p => p.Room_Addon)
                    .HasForeignKey(d => d.AddonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_Addon_Addon");

                entity.HasOne(d => d.Room)
                    .WithMany(p => p.Room_Addon)
                    .HasForeignKey(d => d.RoomId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_Addon_Room");
            });

            modelBuilder.Entity<Room_Amenity>(entity =>
            {
                entity.HasOne(d => d.Amentity)
                    .WithMany(p => p.Room_Amenity)
                    .HasForeignKey(d => d.AmentityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_Amenity_Amenity");

                entity.HasOne(d => d.Room)
                    .WithMany(p => p.Room_Amenity)
                    .HasForeignKey(d => d.RoomId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_Amenity_Room");
            });

            modelBuilder.Entity<Room_RoomPromotion>(entity =>
            {
                entity.HasOne(d => d.Promotion)
                    .WithMany(p => p.Room_RoomPromotion)
                    .HasForeignKey(d => d.PromotionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_RoomPromotion_RoomPromotion");

                entity.HasOne(d => d.Room)
                    .WithMany(p => p.Room_RoomPromotion)
                    .HasForeignKey(d => d.RoomId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_RoomPromotion_Room");
            });

            modelBuilder.Entity<Room_RoomRate>(entity =>
            {
                entity.HasKey(e => new { e.RoomId, e.RoomRateId });

                entity.HasOne(d => d.Room)
                    .WithMany(p => p.Room_RoomRate)
                    .HasForeignKey(d => d.RoomId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_RoomRate_Room");

                entity.HasOne(d => d.RoomRate)
                    .WithMany(p => p.Room_RoomRate)
                    .HasForeignKey(d => d.RoomRateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_RoomRate_RoomRate");
            });

            modelBuilder.Entity<RoomPromotion>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<RoomPromotion_RoomPromotionRate>(entity =>
            {
                entity.HasOne(d => d.Promotion)
                    .WithMany(p => p.RoomPromotion_RoomPromotionRate)
                    .HasForeignKey(d => d.PromotionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoomPromotion_RoomPromotionRate_RoomPromotion");

                entity.HasOne(d => d.PromotionRate)
                    .WithMany(p => p.RoomPromotion_RoomPromotionRate)
                    .HasForeignKey(d => d.PromotionRateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoomPromotion_RoomPromotionRate_RoomPromotionRate");
            });

            modelBuilder.Entity<RoomPromotionRate>(entity =>
            {
                entity.Property(e => e.PromotionType).IsUnicode(false);
            });

            modelBuilder.Entity<RoomRate>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<RoomType>(entity =>
            {
                entity.Property(e => e.RoomTypeDescription).IsUnicode(false);
            });

            modelBuilder.Entity<Sale>(entity =>
            {
                entity.HasOne(d => d.PurchaseType)
                    .WithMany(p => p.Sale)
                    .HasForeignKey(d => d.PurchaseTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sale_PurchaseType");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Sale)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sale_State");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.Sale)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sale_Vehicle");
            });

            modelBuilder.Entity<Special>(entity =>
            {
                entity.Property(e => e.Special_ID).ValueGeneratedNever();
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.Property(e => e.Abbreviation).IsUnicode(false);

                entity.Property(e => e.AssocPress).IsUnicode(false);

                entity.Property(e => e.CensusDivision).IsUnicode(false);

                entity.Property(e => e.CensusDivisionName).IsUnicode(false);

                entity.Property(e => e.CensusRegion).IsUnicode(false);

                entity.Property(e => e.CensusRegionName).IsUnicode(false);

                entity.Property(e => e.CircuitCourt).IsUnicode(false);

                entity.Property(e => e.Country).IsUnicode(false);

                entity.Property(e => e.FipsState).IsUnicode(false);

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.Notes).IsUnicode(false);

                entity.Property(e => e.Occupied).IsUnicode(false);

                entity.Property(e => e.StandardFederalRegion).IsUnicode(false);

                entity.Property(e => e.Status).IsUnicode(false);

                entity.Property(e => e.Type).IsUnicode(false);
            });

            modelBuilder.Entity<TransmissionType>(entity =>
            {
                entity.Property(e => e.TransmissionTypeID).ValueGeneratedNever();

                entity.Property(e => e.TransmissionType1).IsUnicode(false);
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.Property(e => e.VINumber).IsUnicode(false);

                entity.HasOne(d => d.BodyStyle)
                    .WithMany(p => p.Vehicle)
                    .HasForeignKey(d => d.BodyStyleID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Vehicle_BodyStyle");

                entity.HasOne(d => d.ExteriorColor)
                    .WithMany(p => p.Vehicle)
                    .HasForeignKey(d => d.ExteriorColorID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Vehicle_ExteriorColor");

                entity.HasOne(d => d.InteriorColor)
                    .WithMany(p => p.Vehicle)
                    .HasForeignKey(d => d.InteriorColorID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Vehicle_InteriorColor");

                entity.HasOne(d => d.MakeModel)
                    .WithMany(p => p.Vehicle)
                    .HasForeignKey(d => d.MakeModelID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Vehicle_MakeModel");

                entity.HasOne(d => d.TransmissionType)
                    .WithMany(p => p.Vehicle)
                    .HasForeignKey(d => d.TransmissionTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Vehicle_TransmissionType");
            });
        }
    }
}
