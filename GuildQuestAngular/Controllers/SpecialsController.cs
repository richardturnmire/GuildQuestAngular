using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GuildQuestAngular.Models;
using Newtonsoft.Json;

namespace GuildQuestAngular.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class SpecialsController : Controller
    {
        private readonly GuildCarsContext _context;

        public SpecialsController(GuildCarsContext context)
        {
            _context = context;
        }

        // GET: api/Specials
        [HttpGet]
        public async Task<IActionResult> GetSpecial()
        {
            List<Special> ilIst = new List<Special>();
            var listData = await (from spec in _context.Special
                                  select new
                                  {
                                      spec.Special_ID,
                                      spec.Special_Title,
                                      spec.Special_Description

                                  }
                ).ToListAsync();
            listData.ForEach(x =>
            {
                ilIst.Add(new Special
                {
                    Special_ID = x.Special_ID,
                    Special_Title = x.Special_Title,
                    Special_Description = x.Special_Description
                });
            });

            return Json(ilIst);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSpecial([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var special = await _context.Special.FindAsync(id);

            return special == null ? NotFound() : (IActionResult)Ok(special);
        }

        // PUT: api/Specials/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpecial([FromRoute] int id, [FromBody] Special special)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != special.Special_ID)
            {
                return BadRequest();
            }

            _context.Entry(special).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpecialExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Specials
        [HttpPost]
        public async Task<IActionResult> PostSpecial([FromBody] Special special)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Special.Add(special);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SpecialExists(special.Special_ID))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSpecial", new { id = special.Special_ID }, special);
        }

        // DELETE: api/Specials/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpecial([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var special = await _context.Special.FindAsync(id);
            if (special == null)
            {
                return NotFound();
            }

            _context.Special.Remove(special);
            await _context.SaveChangesAsync();

            return Ok(special);
        }

        private bool SpecialExists(int id)
        {
            return _context.Special.Any(e => e.Special_ID == id);
        }
    }
}