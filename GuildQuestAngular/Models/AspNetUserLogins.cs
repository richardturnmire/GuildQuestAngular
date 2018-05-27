using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class AspNetUserLogins
    {
        [StringLength(128)]
        public string LoginProvider { get; set; }
        [StringLength(128)]
        public string ProviderKey { get; set; }
        [StringLength(128)]
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("AspNetUserLogins")]
        public AspNetUsers User { get; set; }
    }
}
