using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class AddonRate
    {
        public AddonRate()
        {
            Addon_AddonRate = new HashSet<Addon_AddonRate>();
        }

        public int Id { get; set; }
        [Column("AddonRate")]
        public decimal? AddonRate1 { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime BeginDate { get; set; }
        [Column(TypeName = "smalldatetime")]
        public DateTime? EndDate { get; set; }

        [InverseProperty("AddonRate")]
        public ICollection<Addon_AddonRate> Addon_AddonRate { get; set; }
    }
}
