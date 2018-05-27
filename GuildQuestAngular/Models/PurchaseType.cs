using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class PurchaseType
    {
        public PurchaseType()
        {
            Sale = new HashSet<Sale>();
        }

        public int PurchaseTypeId { get; set; }
        [Required]
        [StringLength(50)]
        public string Description { get; set; }

        [InverseProperty("PurchaseType")]
        public ICollection<Sale> Sale { get; set; }
    }
}
