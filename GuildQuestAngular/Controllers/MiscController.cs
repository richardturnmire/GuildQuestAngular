using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GuildQuestAngular.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using GuildQuestAngular.Utils;

namespace GuildQuestAngular.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MiscController : Controller
    {
        private readonly GuildCarsContext _context;
        private readonly KeysClass.IKeyService _keyService;

        public MiscController(KeysClass.IKeyService keyService, GuildCarsContext context)
        {
            _keyService = keyService;
            _context = context;

        }

        // GET: api/Misc
        [HttpGet]
        public JsonResult Get()
        {
            var key1 = _keyService.GetGoogleKey();
            // var key2 = key1.GoogleMapKey;
            return Json(new string[] { key1, "value2" });
        }
        [HttpGet("GetGoogleKey")]
        public string GetGoogleKey()
        {
            return _keyService.GetGoogleKey();
            // var key2 = key1.GoogleMapKey;
            // return Json(new string[] { key1, "value2" });
        }

        // GET: api/Misc/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Misc
        [HttpPost("Contact/Create")]
        public async Task<IActionResult> Post([FromBody]Contact value)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _context.Contact.Add(value);
                await _context.SaveChangesAsync();
            }
            catch  (Exception ex)
            {
                Console.WriteLine(ex);
                throw ex;
            }

            return Ok();
        }

        // PUT: api/Misc/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
