using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Contact
    {
        public int ContactID { get; set; }
        [Required]
        [StringLength(128)]
        public string ContactName { get; set; }
        [Required]
        [StringLength(128)]
        public string ContactEmail { get; set; }
        [StringLength(16)]
        public string ContactPhone { get; set; }
        [Required]
        [StringLength(128)]
        public string ContactSubject { get; set; }
        [Required]
        [StringLength(1024)]
        public string ContactMessage { get; set; }
        public bool? ContactGenerated { get; set; }
    }
}
