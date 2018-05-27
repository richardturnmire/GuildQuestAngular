using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class RoomPromotion_RoomPromotionRate
    {
        public int Id { get; set; }
        public int PromotionId { get; set; }
        public int PromotionRateId { get; set; }

        [ForeignKey("PromotionId")]
        [InverseProperty("RoomPromotion_RoomPromotionRate")]
        public RoomPromotion Promotion { get; set; }
        [ForeignKey("PromotionRateId")]
        [InverseProperty("RoomPromotion_RoomPromotionRate")]
        public RoomPromotionRate PromotionRate { get; set; }
    }
}
