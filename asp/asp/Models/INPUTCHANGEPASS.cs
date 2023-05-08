using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class INPUTCHANGEPASS
    {
        public string USER_PASSWORD { get; set; }
        public string USER_PASSWORDNEW { get; set; }
        public string USER_PASSWORDNEWCHECK { get; set; }
        public string USER_NAME { get; set; }
        public string TYPE { get; set; }
    }
}
