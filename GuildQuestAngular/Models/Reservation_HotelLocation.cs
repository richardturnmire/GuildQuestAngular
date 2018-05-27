using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Reservation_HotelLocation
    {
        public int ReservationId { get; set; }
        public int HotelLocationId { get; set; }

        [ForeignKey("HotelLocationId")]
        [InverseProperty("Reservation_HotelLocation")]
        public Hotel_Location HotelLocation { get; set; }
        [ForeignKey("ReservationId")]
        [InverseProperty("Reservation_HotelLocation")]
        public Reservation Reservation { get; set; }
    }
}
