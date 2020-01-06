using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Study_Reactis_v1.Entites
{
    public class JobInformation
    {
        public int JobId { get; set; }

        public int PersonId { get; set; }

        public string CompanyName { get; set; }

        public string Address { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime? EndDate { get; set; }
    }
}
