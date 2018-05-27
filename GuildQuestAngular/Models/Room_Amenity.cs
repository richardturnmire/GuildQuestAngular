using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Room_Amenity
    {
        [Key]
        public int RoomAmenitryId { get; set; }
        public int RoomId { get; set; }
        public int AmentityId { get; set; }

        [ForeignKey("AmentityId")]
        [InverseProperty("Room_Amenity")]
        public Amenity Amentity { get; set; }
        [ForeignKey("RoomId")]
        [InverseProperty("Room_Amenity")]
        public Room Room { get; set; }
    }
}
