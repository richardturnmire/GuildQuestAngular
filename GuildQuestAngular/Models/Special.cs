using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Special
    {
        [Key]
        public int Special_ID { get; set; }
        [Required]
        [StringLength(128)]
        public string Special_Title { get; set; }
        [Required]
        [StringLength(1024)]
        public string Special_Description { get; set; }
    }
}
