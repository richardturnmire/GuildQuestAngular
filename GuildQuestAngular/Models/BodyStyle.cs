using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class BodyStyle
    {
        public BodyStyle()
        {
            Vehicle = new HashSet<Vehicle>();
        }

        public int BodyStyleID { get; set; }
        [Required]
        [Column("BodyStyle")]
        [StringLength(50)]
        public string BodyStyle1 { get; set; }

        [InverseProperty("BodyStyle")]
        public ICollection<Vehicle> Vehicle { get; set; }
    }
}
