using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Room
    {
        public Room()
        {
            Room_Addon = new HashSet<Room_Addon>();
            Room_Amenity = new HashSet<Room_Amenity>();
            Room_RoomPromotion = new HashSet<Room_RoomPromotion>();
            Room_RoomRate = new HashSet<Room_RoomRate>();
        }

        public int Roomid { get; set; }
        public int HotelLocationId { get; set; }
        public short RoomNumber { get; set; }
        public short Floor { get; set; }
        public short RoomOccupancy { get; set; }
        public short MaxOccupancy { get; set; }
        public int? RoomTypeId { get; set; }
        public int? ReservationId { get; set; }

        [ForeignKey("HotelLocationId")]
        [InverseProperty("Room")]
        public Hotel_Location HotelLocation { get; set; }
        [ForeignKey("RoomTypeId")]
        [InverseProperty("Room")]
        public RoomType RoomType { get; set; }
        [InverseProperty("Room")]
        public ICollection<Room_Addon> Room_Addon { get; set; }
        [InverseProperty("Room")]
        public ICollection<Room_Amenity> Room_Amenity { get; set; }
        [InverseProperty("Room")]
        public ICollection<Room_RoomPromotion> Room_RoomPromotion { get; set; }
        [InverseProperty("Room")]
        public ICollection<Room_RoomRate> Room_RoomRate { get; set; }
    }
}
