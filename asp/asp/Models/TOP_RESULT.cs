using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class TOP_RESULT
    {
        [Key]
        public int? TOP_RESULT_ID { get; set; }
        public int? TOP_RESULT_VALUE { get; set; }
    }
}
