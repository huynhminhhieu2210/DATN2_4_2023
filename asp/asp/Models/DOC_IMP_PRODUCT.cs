﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class DOC_IMP_PRODUCT
    {
        [Key]
        public string DOC_IMP_PRODUCT_ID { get; set; }
        public string DOC_IMP_PRODUCT_CODE { get; set; }
        public string BRANCH_ID { get; set; }
        public string DELIVER { get; set; }
        public string RECEIVER { get; set; }
        public decimal TOTAL { get; set; }
        public string STATUS { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
    }
}