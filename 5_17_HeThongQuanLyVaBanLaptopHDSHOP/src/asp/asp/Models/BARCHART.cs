using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class BARCHART
    {
        [Key]
        public string BARCHART_ID { get; set; }
        public string MONTH { get; set; }
        public string YEAR { get; set; }
        public string TYPE { get; set; }
        public decimal DATA { get; set; }
    }
    public class CHART_BAR_FILTER
    {
        public DateTime? FROM_DATE { get; set; }
        public DateTime? TO_DATE { get; set; }
    }
}
