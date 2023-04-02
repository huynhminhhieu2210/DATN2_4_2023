using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class WAREHOUSE
    {
        [Key]
        public string WAREHOUSE_ID { get; set; }
        public string BRANCH_ID { get; set; }
        public string AREA_ID { get; set; }
        public string WAREHOUSE_CODE { get; set; }
        public string WAREHOUSE_NAME { get; set; }
        public string WAREHOUSE_ADDRESS { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
    }
}
