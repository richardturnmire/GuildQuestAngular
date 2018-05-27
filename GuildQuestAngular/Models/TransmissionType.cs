using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuildQuestAngular.Models
{
    public partial class TransmissionType
    {
        public TransmissionType()
        {
            Vehicle = new HashSet<Vehicle>();
        }

        public int TransmissionTypeID { get; set; }
        [Required]
        [Column("TransmissionType")]
        [StringLength(50)]
        public string TransmissionType1 { get; set; }

        [InverseProperty("TransmissionType")]
        public ICollection<Vehicle> Vehicle { get; set; }
    }
}
