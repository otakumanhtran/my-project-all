﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Study_Reactis_v1.Entites
{
    public class Person
    {
        [Key]
        public int PersonId { get; set; }

        public string FullName { get; set; }

        public DateTime? Birthday { get; set; }

        public string  Gender  { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Image { get; set; }
    }
}
