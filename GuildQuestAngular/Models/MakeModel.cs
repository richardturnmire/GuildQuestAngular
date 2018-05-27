using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class MakeModel
    {
        public MakeModel()
        {
            Vehicle = new HashSet<Vehicle>();
        }

        public int MakeModelID { get; set; }
        public int MakeID { get; set; }
        public int ModelID { get; set; }
        [Required]
        [StringLength(50)]
        public string MakeName { get; set; }
        [Required]
        [StringLength(50)]
        public string ModelName { get; set; }

        [ForeignKey("MakeID")]
        [InverseProperty("MakeModel")]
        public Make Make { get; set; }
        [ForeignKey("ModelID")]
        [InverseProperty("MakeModel")]
        public Model Model { get; set; }
        [InverseProperty("MakeModel")]
        public ICollection<Vehicle> Vehicle { get; set; }
    }
}
