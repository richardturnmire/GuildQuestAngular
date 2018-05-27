using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class RoomPromotionRate
    {
        public RoomPromotionRate()
        {
            RoomPromotion_RoomPromotionRate = new HashSet<RoomPromotion_RoomPromotionRate>();
        }

        public int Id { get; set; }
        [Required]
        [StringLength(10)]
        public string PromotionType { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime BeginDate { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime? EndDate { get; set; }
        [Column(TypeName = "smallmoney")]
        public decimal? DiscountAmt { get; set; }
        [Column(TypeName = "decimal(6, 2)")]
        public decimal? DiscountPercent { get; set; }

        [InverseProperty("PromotionRate")]
        public ICollection<RoomPromotion_RoomPromotionRate> RoomPromotion_RoomPromotionRate { get; set; }
    }
}
