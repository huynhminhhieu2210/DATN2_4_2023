﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models
{
    public class LOGIN
    {
        [Key]
        public string USER_NAME { get; set; }
        public string PASSWORD { get; set; }
        public string TYPE { get; set; }
    }
}
