using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class Addon_AddonRate
    {
        public int Id { get; set; }
        public int AddonId { get; set; }
        public int AddonRateId { get; set; }

        [ForeignKey("AddonId")]
        [InverseProperty("Addon_AddonRate")]
        public Addon Addon { get; set; }
        [ForeignKey("AddonRateId")]
        [InverseProperty("Addon_AddonRate")]
        public AddonRate AddonRate { get; set; }
    }
}
