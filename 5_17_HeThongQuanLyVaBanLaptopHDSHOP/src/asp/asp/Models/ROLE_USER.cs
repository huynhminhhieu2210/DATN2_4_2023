using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class ROLE_USER
    {
        [Key]
        public string ROLE_USER_ID { get; set; }
        public string ROLE_USER_CODE { get; set; }
        public string ROLE_USER_NAME { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
    }
}
