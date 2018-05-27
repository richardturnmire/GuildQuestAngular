using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Vehicle
    {
        public Vehicle()
        {
            Sale = new HashSet<Sale>();
        }

        public int VehicleID { get; set; }
        public short Year { get; set; }
        public int MakeModelID { get; set; }
        public int BodyStyleID { get; set; }
        public int TransmissionTypeID { get; set; }
        public int InteriorColorID { get; set; }
        public int ExteriorColorID { get; set; }
        public int Mileage { get; set; }
        [Required]
        [StringLength(17)]
        public string VINumber { get; set; }
        [Column(TypeName = "money")]
        public decimal SalesPrice { get; set; }
        [Column(TypeName = "money")]
        public decimal MSRPrice { get; set; }
        public bool Sold { get; set; }
        public bool Featured { get; set; }
        [StringLength(1024)]
        public string Description { get; set; }
        public short Type { get; set; }

        [ForeignKey("BodyStyleID")]
        [InverseProperty("Vehicle")]
        public BodyStyle BodyStyle { get; set; }
        [ForeignKey("ExteriorColorID")]
        [InverseProperty("Vehicle")]
        public ExteriorColor ExteriorColor { get; set; }
        [ForeignKey("InteriorColorID")]
        [InverseProperty("Vehicle")]
        public InteriorColor InteriorColor { get; set; }
        [ForeignKey("MakeModelID")]
        [InverseProperty("Vehicle")]
        public MakeModel MakeModel { get; set; }
        [ForeignKey("TransmissionTypeID")]
        [InverseProperty("Vehicle")]
        public TransmissionType TransmissionType { get; set; }
        [InverseProperty("Vehicle")]
        public ICollection<Sale> Sale { get; set; }
    }
}
