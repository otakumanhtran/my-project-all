using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Study_Reactis_v1.Entites
{
    public class PersonEvent
    {
        public int PersonId { get; set; }

        public int EventId { get; set; }

        public string Time { get; set; }

        public Event EventOfPerson { get; set; }
    }
}
