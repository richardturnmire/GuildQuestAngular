using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Amenity
    {
        public Amenity()
        {
            Room_Amenity = new HashSet<Room_Amenity>();
        }

        public int AmenityId { get; set; }
        [Required]
        [StringLength(50)]
        public string Description { get; set; }

        [InverseProperty("Amentity")]
        public ICollection<Room_Amenity> Room_Amenity { get; set; }
    }
}
