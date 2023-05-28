using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class DOC_IMP_PRODUCT_DT
    {
        [Key]
        public string DOC_IMP_PRODUCT_DT_ID { get; set; }
        public string PRODUCT_ID { get; set; }
        public string PRODUCT_NAME { get; set; }
        public string PRODUCT_CODE { get; set; }
        public decimal QUANTITY { get; set; }
        public decimal PRICE { get; set; }
        public string STATUS { get; set; }
        public string DOC_IMP_PRODUCT_ID { get; set; }
    }
}
