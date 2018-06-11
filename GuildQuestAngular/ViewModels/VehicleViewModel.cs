using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using GuildQuestAngular.Models;

namespace GuildQuestAngular.ViewModels
{
    public class VehicleViewModel
    {
        public int VehicleID { get; set; }
        public short Year { get; set; }
        public int MakeModelID { get; set; }
        public int MakeID { get;set;}
        public int ModelID { get; set; }
        public int BodyStyleID { get; set; }
        public int TransmissionTypeID { get; set; }
        public int InteriorColorID { get; set; }
        public int ExteriorColorID { get; set; }
        public int Mileage { get; set; }
       
        public string VINumber { get; set; }
       
        public decimal SalesPrice { get; set; }
       
        public decimal MSRPrice { get; set; }
        public bool Sold { get; set; }
        public bool Featured { get; set; }
       
        public string Description { get; set; }
        public short Type { get; set; }
 
        public string BodyStyle { get; set; }
         
        public string ExteriorColor { get; set; }
         
        public string InteriorColor { get; set; }
        
        public string MakeName { get; set; }

        public string ModelName { get; set; }
         
        public string TransmissionType { get; set; }

        public string YearMakeModel { get; set; }
       
       // public ICollection<Sale> Sale { get; set; }
    }
}
