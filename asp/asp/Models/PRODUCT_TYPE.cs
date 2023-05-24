using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class PRODUCT_TYPE
    {
        [Key]
        public string PRODUCT_TYPE_ID { get; set; }
        public string PRODUCT_TYPE_CODE { get; set; }
        public string PRODUCT_TYPE_NAME { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
        public string CREATE_NAME { get; set; }
    }
}
