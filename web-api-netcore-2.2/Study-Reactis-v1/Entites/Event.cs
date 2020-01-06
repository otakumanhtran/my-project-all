using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Study_Reactis_v1.Entites
{
    public class Event
    {
        [Key]
        public int EventId { get; set; }

        public string EventName { get; set; }

        public ICollection<PersonEvent> PersonEvents { get; set; }
    }
}
