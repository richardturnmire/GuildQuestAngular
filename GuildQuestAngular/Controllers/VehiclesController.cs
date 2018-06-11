using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GuildQuestAngular.Models;
using GuildQuestAngular.ViewModels;

namespace GuildQuestAngular.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class VehiclesController : Controller
    {
        private readonly GuildCarsContext _context;

        public VehiclesController(GuildCarsContext context)
        {
            _context = context;
        }

        // GET: api/Vehicles
        [HttpGet]
        public async Task<IActionResult> GetVehicles()
        {
            var listData = await (from veh in _context.Vehicle
                    where veh.Featured
                    select veh
                ).ToListAsync();

            return Json(listData);
        }

        // GET: api/Vehicles/New
        [HttpGet("All")]
        public async Task<IActionResult> GetAllVehicles()
        {
            // List<VehicleViewModel> ilIst = new List<VehicleViewModel>();

            var listData = await (from veh in _context.Vehicle
                    select new VehicleViewModel
                    {
                        VehicleID = veh.VehicleID,
                        MakeName = veh.MakeModel.MakeName,
                        ModelName = veh.MakeModel.ModelName,
                        SalesPrice = veh.SalesPrice,
                        TransmissionType = veh.TransmissionType.TransmissionType1,
                        InteriorColor = veh.InteriorColor.InteriorColor1,
                        ExteriorColor = veh.ExteriorColor.ExteriorColor1,
                        Mileage = veh.Mileage,
                        MSRPrice = veh.MSRPrice,
                        VINumber = veh.VINumber,
                        Description = veh.Description,
                        BodyStyle = veh.BodyStyle.BodyStyle1,
                        Year = veh.Year,
                        YearMakeModel = $"{veh.Year} {veh.MakeModel.MakeName.Trim()} {veh.MakeModel.ModelName.Trim()}"
                    }
                ).ToListAsync();

            return Json(listData);
        }

        // GET: api/Vehicles/New
        [HttpGet("New")]
        public async Task<IActionResult> GetNewVehicles()
        {
            // List<VehicleViewModel> ilIst = new List<VehicleViewModel>();
            
            var listData = await (from veh in _context.Vehicle
                    where veh.Type == 1
                    select new VehicleViewModel
                    {
                        VehicleID = veh.VehicleID,
                        MakeName = veh.MakeModel.MakeName,
                        ModelName = veh.MakeModel.ModelName,
                        SalesPrice = veh.SalesPrice,
                        TransmissionType = veh.TransmissionType.TransmissionType1,
                        InteriorColor = veh.InteriorColor.InteriorColor1,
                        ExteriorColor = veh.ExteriorColor.ExteriorColor1,
                        Mileage = veh.Mileage,
                        MSRPrice = veh.MSRPrice,
                        VINumber = veh.VINumber,
                        Description = veh.Description,
                        BodyStyle = veh.BodyStyle.BodyStyle1,
                        Year = veh.Year,
                        YearMakeModel = $"{veh.Year} {veh.MakeModel.MakeName.Trim()} {veh.MakeModel.ModelName.Trim()}"
                    }
                ).ToListAsync();
          
            return Json(listData);
        }

        // GET: api/Vehicles/Used
        [HttpGet("Used")]
        public async Task<IActionResult> GetUsedVehicles()
        {
            List<VehicleViewModel> ilIst = new List<VehicleViewModel>();

            var listData = await (from veh in _context.Vehicle
                    where veh.Type == 0
                    select new VehicleViewModel
                    {
                        VehicleID = veh.VehicleID,
                        MakeName = veh.MakeModel.MakeName,
                        ModelName = veh.MakeModel.ModelName,
                        SalesPrice = veh.SalesPrice,
                        TransmissionType = veh.TransmissionType.TransmissionType1,
                        InteriorColor = veh.InteriorColor.InteriorColor1,
                        ExteriorColor = veh.ExteriorColor.ExteriorColor1,
                        Mileage = veh.Mileage,
                        MSRPrice = veh.MSRPrice,
                        VINumber = veh.VINumber.Trim(),
                        Description = veh.Description,
                        BodyStyle = veh.BodyStyle.BodyStyle1,
                        Year = veh.Year,
                        YearMakeModel = $"{veh.Year} {veh.MakeModel.MakeName.Trim()} {veh.MakeModel.ModelName.Trim()}"
                    }
                ).ToListAsync();
           
            return Json(listData);
        }

        [HttpGet("Featured")]
        public async Task<IActionResult> GetFeatured()
        {
            var listData = await (from veh in _context.Vehicle
                    where veh.Featured
                    select new
                    {
                        veh.VehicleID,
                        veh.Year,
                        veh.MakeModel.MakeName,
                        veh.MakeModel.ModelName,
                        veh.SalesPrice,
                        veh.VINumber
                    })
                .ToListAsync();

            return Json(listData);
        }

        // GET: api/Vehicles/5
        [HttpGet("Detail/{id}")]
        public async Task<IActionResult> GetVehicle([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            List<VehicleViewModel> ilIst = new List<VehicleViewModel>();

            var listData = await (from veh in _context.Vehicle
                    where (veh.VehicleID == id)
                    select new VehicleViewModel
                    {
                        VehicleID = veh.VehicleID,
                        MakeModelID = veh.MakeModelID,
                        MakeID = veh.MakeModel.MakeID,
                        ModelID = veh.MakeModel.ModelID,
                        BodyStyleID = veh.BodyStyleID,
                        TransmissionTypeID = veh.TransmissionTypeID,
                        InteriorColorID = veh.InteriorColorID,
                        ExteriorColorID = veh.ExteriorColorID,
                        MakeName = veh.MakeModel.MakeName,
                        ModelName = veh.MakeModel.ModelName,
                        SalesPrice = veh.SalesPrice,
                        TransmissionType = veh.TransmissionType.TransmissionType1,
                        InteriorColor = veh.InteriorColor.InteriorColor1,
                        ExteriorColor = veh.ExteriorColor.ExteriorColor1,
                        Mileage = veh.Mileage,
                        MSRPrice = veh.MSRPrice,
                        VINumber = veh.VINumber.Trim(),
                        Description = veh.Description ?? "No Description",
                        BodyStyle = veh.BodyStyle.BodyStyle1,
                        Year = veh.Year,
                        YearMakeModel = $"{veh.Year} {veh.MakeModel.MakeName.Trim()} {veh.MakeModel.ModelName.Trim()}"
                    }
                ).ToListAsync();

            return Json(listData);
        }

//        // PUT: api/Vehicles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicle([FromRoute] int id, [FromBody] Vehicle vehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vehicle.VehicleID)
            {
                return BadRequest();
            }

            _context.Entry(vehicle).State = EntityState.Modified;

            try
            {                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleExists(id))
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

        // POST: api/Vehicles
        [HttpPost]
        public async Task<IActionResult> PostVehicle([FromBody] Vehicle vehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Vehicle.Add(vehicle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicle", new { id = vehicle.VehicleID }, vehicle);
        }

//        // DELETE: api/Vehicles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var vehicle = await _context.Vehicle.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            _context.Vehicle.Remove(vehicle);
            await _context.SaveChangesAsync();

            return Ok(vehicle);
        }

        private bool VehicleExists(int id)
        {
            return _context.Vehicle.Any(e => e.VehicleID == id);
        }
    }
}