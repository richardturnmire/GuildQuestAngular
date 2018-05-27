using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Hotel
    {
        public Hotel()
        {
            Hotel_Location = new HashSet<Hotel_Location>();
        }

        public int HotelId { get; set; }
        [Required]
        [StringLength(50)]
        public string HotelName { get; set; }

        [InverseProperty("Hotel")]
        public ICollection<Hotel_Location> Hotel_Location { get; set; }
    }
}
