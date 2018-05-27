using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class AspNetUserRoles
    {
        [StringLength(128)]
        public string UserId { get; set; }
        [StringLength(128)]
        public string RoleId { get; set; }

        [ForeignKey("RoleId")]
        [InverseProperty("AspNetUserRoles")]
        public AspNetRoles Role { get; set; }
        [ForeignKey("UserId")]
        [InverseProperty("AspNetUserRoles")]
        public AspNetUsers User { get; set; }
    }
}
