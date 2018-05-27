using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Reservation
    {
        public Reservation()
        {
            Bill = new HashSet<Bill>();
            Reservation_HotelLocation = new HashSet<Reservation_HotelLocation>();
        }

        public int ReservationId { get; set; }
        [Required]
        [StringLength(50)]
        public string Description { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime BeginDate { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime EndDate { get; set; }
        public short NumberOfRooms { get; set; }
        public int CustomerId { get; set; }
        [Required]
        [StringLength(20)]
        public string CreditCard { get; set; }

        [ForeignKey("CustomerId")]
        [InverseProperty("Reservation")]
        public Customers Customer { get; set; }
        [InverseProperty("Reservation")]
        public ICollection<Bill> Bill { get; set; }
        [InverseProperty("Reservation")]
        public ICollection<Reservation_HotelLocation> Reservation_HotelLocation { get; set; }
    }
}
