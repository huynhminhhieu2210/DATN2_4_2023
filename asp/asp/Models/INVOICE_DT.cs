﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class INVOICE_DT
    {
        [Key]
        public string INVOICE_DT_ID { get; set; }
        public string INVOICE_ID { get; set; }
        public string PRODUCT_COLOR_ID { get; set; }
        public decimal QUANTITY { get; set; }
        public decimal PRICE { get; set; }
    }
}