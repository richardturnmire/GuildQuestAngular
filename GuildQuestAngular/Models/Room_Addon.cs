using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Room_Addon
    {
        public int Id { get; set; }
        public int RoomId { get; set; }
        public int AddonId { get; set; }

        [ForeignKey("AddonId")]
        [InverseProperty("Room_Addon")]
        public Addon Addon { get; set; }
        [ForeignKey("RoomId")]
        [InverseProperty("Room_Addon")]
        public Room Room { get; set; }
    }
}
