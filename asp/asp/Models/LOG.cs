using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class LOG
    {
        [Key]
        public string LOG_ID { get; set; }
        public string REF_ID { get; set; }
        public DateTime? LOG_DATE { get; set; }
        public string LOG_STEP { get; set; }
        public string LOG_DESC { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
    }
}
