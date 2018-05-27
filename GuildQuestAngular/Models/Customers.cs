using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Customers
    {
        public Customers()
        {
            Reservation = new HashSet<Reservation>();
        }

        [Key]
        public int CustomerId { get; set; }
        public int? ReservationId { get; set; }
        [Required]
        [StringLength(50)]
        public string CustomerName { get; set; }
        [Required]
        [StringLength(16)]
        public string Phone { get; set; }
        [StringLength(50)]
        public string Email { get; set; }
        [Required]
        [StringLength(50)]
        public string Address1 { get; set; }
        [StringLength(50)]
        public string Address2 { get; set; }
        [Required]
        [StringLength(50)]
        public string City { get; set; }
        [Required]
        [StringLength(2)]
        public string State { get; set; }
        [Required]
        [StringLength(10)]
        public string ZipCode { get; set; }

        [InverseProperty("Customer")]
        public ICollection<Reservation> Reservation { get; set; }
    }
}
