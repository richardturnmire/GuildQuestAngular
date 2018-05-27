using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class RoomType
    {
        public RoomType()
        {
            Room = new HashSet<Room>();
        }

        public int RoomTypeId { get; set; }
        [Column("RoomType")]
        [StringLength(10)]
        public string RoomType1 { get; set; }
        [Required]
        [StringLength(50)]
        public string RoomTypeDescription { get; set; }

        [InverseProperty("RoomType")]
        public ICollection<Room> Room { get; set; }
    }
}
