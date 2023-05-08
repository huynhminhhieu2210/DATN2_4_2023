using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class UPLOADFILE
    {
        public string REF_ID { get; set; }
        public IFormFile FILE { get; set; }
    }
}
