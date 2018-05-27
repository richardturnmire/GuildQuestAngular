using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Make
    {
        public Make()
        {
            MakeModel = new HashSet<MakeModel>();
        }

        public int MakeID { get; set; }
        [Required]
        [StringLength(50)]
        public string Make_Name { get; set; }

        [InverseProperty("Make")]
        public ICollection<MakeModel> MakeModel { get; set; }
    }
}
