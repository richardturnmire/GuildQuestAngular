using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Room_RoomPromotion
    {
        public int Id { get; set; }
        public int RoomId { get; set; }
        public int PromotionId { get; set; }

        [ForeignKey("PromotionId")]
        [InverseProperty("Room_RoomPromotion")]
        public RoomPromotion Promotion { get; set; }
        [ForeignKey("RoomId")]
        [InverseProperty("Room_RoomPromotion")]
        public Room Room { get; set; }
    }
}
