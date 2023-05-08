using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class ADDRESS_RECEIVE
    {
        [Key]
        public string ADDRESS_RECEIVE_ID { get; set; }
        public string USER_ID { get; set; }
        public string ADDRESS_RECEIVE_NAME { get; set; }
    }
}
