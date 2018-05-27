using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class BillDetail
    {
        public int BillId { get; set; }
        public int BillDetailId { get; set; }
        public int Hotel { get; set; }
        public int Room { get; set; }
        [Required]
        [StringLength(50)]
        public string Description { get; set; }
        [Column(TypeName = "money")]
        public decimal Charge { get; set; }
        [Column(TypeName = "money")]
        public decimal SalesTax { get; set; }
        [Column(TypeName = "money")]
        public decimal HotelTax { get; set; }

        [ForeignKey("BillId")]
        [InverseProperty("BillDetail")]
        public Bill Bill { get; set; }
    }
}
