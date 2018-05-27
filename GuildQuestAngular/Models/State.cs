using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class State
    {
        public State()
        {
            Sale = new HashSet<Sale>();
        }

        public int StateId { get; set; }
        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        [Required]
        [StringLength(255)]
        public string Abbreviation { get; set; }
        [StringLength(255)]
        public string Country { get; set; }
        [StringLength(255)]
        public string Type { get; set; }
        public int? Sort { get; set; }
        [StringLength(255)]
        public string Status { get; set; }
        [StringLength(255)]
        public string Occupied { get; set; }
        [StringLength(255)]
        public string Notes { get; set; }
        [StringLength(255)]
        public string FipsState { get; set; }
        [StringLength(255)]
        public string AssocPress { get; set; }
        [StringLength(255)]
        public string StandardFederalRegion { get; set; }
        [StringLength(255)]
        public string CensusRegion { get; set; }
        [StringLength(255)]
        public string CensusRegionName { get; set; }
        [StringLength(255)]
        public string CensusDivision { get; set; }
        [StringLength(255)]
        public string CensusDivisionName { get; set; }
        [StringLength(255)]
        public string CircuitCourt { get; set; }

        [InverseProperty("State")]
        public ICollection<Sale> Sale { get; set; }
    }
}
