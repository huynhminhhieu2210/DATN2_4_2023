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
        public string ID { get; set; }
        public string RESULT { get; set; }
        public string ERRORDESC { get; set; }
    }
}
