using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Bill
    {
        public Bill()
        {
            BillDetail = new HashSet<BillDetail>();
        }

        public int BillId { get; set; }
        public int? ReservationId { get; set; }
        [Column(TypeName = "money")]
        public decimal BillTotal { get; set; }
        [Column(TypeName = "money")]
        public decimal? AddonTotal { get; set; }
        [Column(TypeName = "money")]
        public decimal? SalesTax { get; set; }

        [ForeignKey("ReservationId")]
        [InverseProperty("Bill")]
        public Reservation Reservation { get; set; }
        [InverseProperty("Bill")]
        public ICollection<BillDetail> BillDetail { get; set; }
    }
}
