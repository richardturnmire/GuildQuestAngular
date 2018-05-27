using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class InteriorColor
    {
        public InteriorColor()
        {
            Vehicle = new HashSet<Vehicle>();
        }

        public int InteriorColorID { get; set; }
        [Required]
        [Column("InteriorColor")]
        [StringLength(50)]
        public string InteriorColor1 { get; set; }

        [InverseProperty("InteriorColor")]
        public ICollection<Vehicle> Vehicle { get; set; }
    }
}
