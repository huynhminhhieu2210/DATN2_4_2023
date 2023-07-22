using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class DOC_IMP_PRODUCT
    {
        [Key]
        public string DOC_IMP_PRODUCT_ID { get; set; }
        public string DOC_IMP_PRODUCT_CODE { get; set; }
        public string DELIVER { get; set; }
        public string RECEIVER { get; set; }
        public string RECEIVER_NAME { get; set; }
        public decimal TOTAL { get; set; }
        public string STATUS { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
        public List<DOC_IMP_PRODUCT_DT> LST_DOC_IMP_PRODUCT_DT { get; set; }
        [NotMapped]
        public string XML_DOC_IMP_PRODUCT_DT { get; set; }
        public string WAREHOUSE_ID { get; set; }
    }
}
