using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class PRODUCT
    {
        [Key]
        public string STT { get; set; }
        public string PRODUCT_ID { get; set; }
        public string PRODUCT_TYPE_ID { get; set; }
        public string SUPPLIER_ID { get; set; }
        public string PRODUCT_CODE { get; set; }
        public string PRODUCT_NAME { get; set; }
        public string DESCRIPTION { get; set; }
        public string NOTE { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
        public string IMG_URL { get; set; }
        public decimal? PRICE { get; set; }
        public string CPU { get; set; }
        public string RAM { get; set; }
        public string DISK { get; set; }
        public string VGA { get; set; }
        public string MONITOR { get; set; }
        public string PRODUCT_TYPE_NAME { get; set; }
        public string SUPPLIER_NAME { get; set; }
        public string WAREHOUSE_ID { get; set; }
        public string WAREHOUSE_NAME { get; set; }
        public decimal? STOCK { get; set; }
        public decimal? GUARANTEE { get; set; }
        public string IS_ACTIVE { get; set; }
        [NotMapped]
        public int? TOP { get; set; }
        public decimal? CREATE_DATE_DECIMAL { get; set; }
        public decimal? QUANTITY_SELL { get; set; }
    }
}
