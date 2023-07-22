using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class STATUS
    {
        [Key]
        public string STATUS_ID { get; set; }
        public string STATUS_NAME { get; set; }
        public string TABLE_NAME { get; set; }
        public string PARENT_ID { get; set; }
    }
}
