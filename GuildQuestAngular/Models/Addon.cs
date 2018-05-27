using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Addon
    {
        public Addon()
        {
            Addon_AddonRate = new HashSet<Addon_AddonRate>();
            Room_Addon = new HashSet<Room_Addon>();
        }

        public int AddonId { get; set; }
        [Required]
        [StringLength(50)]
        public string Description { get; set; }

        [InverseProperty("Addon")]
        public ICollection<Addon_AddonRate> Addon_AddonRate { get; set; }
        [InverseProperty("Addon")]
        public ICollection<Room_Addon> Room_Addon { get; set; }
    }
}
