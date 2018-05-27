using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Model
    {
        public Model()
        {
            MakeModel = new HashSet<MakeModel>();
        }

        public int ModelID { get; set; }
        [Required]
        [StringLength(50)]
        public string Model_Name { get; set; }

        [InverseProperty("Model")]
        public ICollection<MakeModel> MakeModel { get; set; }
    }
}
