using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class AREA
    {
        [Key]
        public string AREA_ID { get; set; }
        public string AREA_CODE { get; set; }
        public string AREA_NAME { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
        public string CREATE_NAME { get; set; }
    }
}
