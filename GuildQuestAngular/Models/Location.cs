using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Location
    {
        public Location()
        {
            Hotel_Location = new HashSet<Hotel_Location>();
        }

        public int LocationId { get; set; }
        [Required]
        [StringLength(50)]
        public string LocationName { get; set; }
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
        [StringLength(10)]
        public string ZipCode { get; set; }

        [InverseProperty("Location")]
        public ICollection<Hotel_Location> Hotel_Location { get; set; }
    }
}
