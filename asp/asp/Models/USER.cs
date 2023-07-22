using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class USER
    {
        [Key]
        public string USER_ID { get; set; }
        public string USER_CODE { get; set; }
        public string USER_NAME { get; set; }
        public string USER_FULLNAME { get; set; }
        public string USER_EMAIL { get; set; }
        public string USER_PHONE { get; set; }
        public string USER_ADDRESS { get; set; }
        public string USER_STATUS { get; set; }
        public string CREATE_ID { get; set; }
        public DateTime? CREATE_DATE { get; set; }
        public string ROLE_USER_NAME { get; set; }
        public string USER_PASSWORD { get; set; }
        public string CREATE_NAME { get; set; }
        public string ROLE_USER { get; set; }
        public string METHOD_LOGIN { get; set; }
    }
}
