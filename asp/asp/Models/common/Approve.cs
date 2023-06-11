using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models.common
{
    public class Approve
    {
        [Key]
        public string REF_ID { get; set; }
        public string CHECKER { get; set; }
        public string CONTENT { get; set; }
    }
}
