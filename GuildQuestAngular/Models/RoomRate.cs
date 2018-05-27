using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class RoomRate
    {
        public RoomRate()
        {
            Room_RoomRate = new HashSet<Room_RoomRate>();
        }

        public int RoomRateId { get; set; }
        [Required]
        [StringLength(50)]
        public string Description { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime BeginDate { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime EndDate { get; set; }
        [Column(TypeName = "smallmoney")]
        public decimal Rate { get; set; }

        [InverseProperty("RoomRate")]
        public ICollection<Room_RoomRate> Room_RoomRate { get; set; }
    }
}
