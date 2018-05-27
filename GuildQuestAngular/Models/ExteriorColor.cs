using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class ExteriorColor
    {
        public ExteriorColor()
        {
            Vehicle = new HashSet<Vehicle>();
        }

        public int ExteriorColorID { get; set; }
        [Required]
        [Column("ExteriorColor")]
        [StringLength(50)]
        public string ExteriorColor1 { get; set; }

        [InverseProperty("ExteriorColor")]
        public ICollection<Vehicle> Vehicle { get; set; }
    }
}
