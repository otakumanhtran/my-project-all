using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Study_Reactis_v1.ViewModel
{
    public class PersonViewModel
    {
        public int PersonId { get; set; }

        public string FullName { get; set; }

        public DateTime? Birthday { get; set; }

        public string Gender { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Image { get; set; }

        public int? jobId { get; set; }
    }
}
