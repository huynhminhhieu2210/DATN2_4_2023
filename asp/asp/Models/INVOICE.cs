using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class INVOICE
    {
        [Key]
        public string INVOICE_ID { get; set; }
        public string INVOICE_CODE { get; set; }
        public string USER_ID { get; set; }
        public string RECEIVER { get; set; }
        public string RECEIVER_ADDRESS { get; set; }
        public string RECEIVER_PHONE { get; set; }
        public decimal TOTAL { get; set; }
        public string STATUS { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
        [NotMapped]
        public List<INVOICE_DT> LST_INVOICE_DT { get; set; }
        [NotMapped]
        public string XML_INVOICE_DT { get; set; }
        public string INVOICE_STATUS_NAME { get; set; }
        public string METHOD_PAY { get; set; }
        public string CREATE_NAME { get; set; }
        public string USER_NAME { get; set; }
    }
}
