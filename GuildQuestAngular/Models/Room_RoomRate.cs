using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Room_RoomRate
    {
        public int RoomId { get; set; }
        public int RoomRateId { get; set; }

        [ForeignKey("RoomId")]
        [InverseProperty("Room_RoomRate")]
        public Room Room { get; set; }
        [ForeignKey("RoomRateId")]
        [InverseProperty("Room_RoomRate")]
        public RoomRate RoomRate { get; set; }
    }
}
