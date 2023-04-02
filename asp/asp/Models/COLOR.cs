using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class COLOR
    {
        [Key]
        public string COLOR_ID { get; set; }
        public string COLOR_CODE { get; set; }
        public string COLOR_NAME { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
    }
}
