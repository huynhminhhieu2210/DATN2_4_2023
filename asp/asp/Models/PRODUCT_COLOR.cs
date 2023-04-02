using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class PRODUCT_COLOR
    {
        [Key]
        public string PRODUCT_COLOR_ID { get; set; }
        public string COLOR_ID { get; set; }
        public string PRODUCT_ID { get; set; }
        public string WAREHOUSE_ID { get; set; }
        public decimal STOCK { get; set; }
        public decimal PRICE { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
    }
}
