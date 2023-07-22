using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models.common
{
    public class InsertResult
    {
        [Key]
        public string Result { get; set; }
        public string ErrorDesc { get; set; }
        public string ID { get; set; }
    }
}
