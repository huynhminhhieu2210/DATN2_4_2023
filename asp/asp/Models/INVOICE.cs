using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class INVOICE
    {
        [Key]
        public string INVOICE_ID { get; set; }
        public string INVOICE_CODE { get; set; }
        public string CUSTOMER_ID { get; set; }
        public string RECEIVER { get; set; }
        public string RECEIVER_ADDRESS { get; set; }
        public string RECEIVER_PHONE { get; set; }
        public decimal TOTAL { get; set; }
        public string STATUS { get; set; }
        public decimal MONEY_PAYED { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
    }
}
