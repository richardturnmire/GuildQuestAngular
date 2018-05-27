using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Hotel_Location
    {
        public Hotel_Location()
        {
            Reservation_HotelLocation = new HashSet<Reservation_HotelLocation>();
            Room = new HashSet<Room>();
        }

        [Key]
        public int HotelLocationId { get; set; }
        public int HotelId { get; set; }
        public int LocationId { get; set; }

        [ForeignKey("HotelId")]
        [InverseProperty("Hotel_Location")]
        public Hotel Hotel { get; set; }
        [ForeignKey("LocationId")]
        [InverseProperty("Hotel_Location")]
        public Location Location { get; set; }
        [InverseProperty("HotelLocation")]
        public ICollection<Reservation_HotelLocation> Reservation_HotelLocation { get; set; }
        [InverseProperty("HotelLocation")]
        public ICollection<Room> Room { get; set; }
    }
}
