using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Sale
    {
        public int SaleId { get; set; }
        public int VehicleId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [StringLength(10)]
        public string Phone { get; set; }
        [Required]
        [StringLength(50)]
        public string Email { get; set; }
        [Required]
        [StringLength(50)]
        public string Street1 { get; set; }
        [StringLength(50)]
        public string Street2 { get; set; }
        [Required]
        [StringLength(50)]
        public string City { get; set; }
        public int StateId { get; set; }
        [Required]
        [StringLength(10)]
        public string ZipCode { get; set; }
        [Column(TypeName = "money")]
        public decimal PurchasePrice { get; set; }
        public int PurchaseTypeId { get; set; }

        [ForeignKey("PurchaseTypeId")]
        [InverseProperty("Sale")]
        public PurchaseType PurchaseType { get; set; }
        [ForeignKey("StateId")]
        [InverseProperty("Sale")]
        public State State { get; set; }
        [ForeignKey("VehicleId")]
        [InverseProperty("Sale")]
        public Vehicle Vehicle { get; set; }
    }
}
