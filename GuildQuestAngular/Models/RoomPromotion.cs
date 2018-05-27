using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class RoomPromotion
    {
        public RoomPromotion()
        {
            RoomPromotion_RoomPromotionRate = new HashSet<RoomPromotion_RoomPromotionRate>();
            Room_RoomPromotion = new HashSet<Room_RoomPromotion>();
        }

        public int RoomPromotionId { get; set; }
        [Required]
        [StringLength(50)]
        public string Description { get; set; }

        [InverseProperty("Promotion")]
        public ICollection<RoomPromotion_RoomPromotionRate> RoomPromotion_RoomPromotionRate { get; set; }
        [InverseProperty("Promotion")]
        public ICollection<Room_RoomPromotion> Room_RoomPromotion { get; set; }
    }
}
