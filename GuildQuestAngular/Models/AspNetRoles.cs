using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class AspNetRoles
    {
        public AspNetRoles()
        {
            AspNetUserRoles = new HashSet<AspNetUserRoles>();
        }

        [StringLength(128)]
        public string Id { get; set; }
        [Required]
        [StringLength(256)]
        public string Name { get; set; }

        [InverseProperty("Role")]
        public ICollection<AspNetUserRoles> AspNetUserRoles { get; set; }
    }
}
