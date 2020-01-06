using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Study_Reactis_v1.Entites
{
    public class MiniFamily
    {
        [Key]
        public int MiniFamilyId { get; set; }

        public int? Father { get; set; }

        public int Mother { get; set; }

        public int? Sister { get; set; }

        public int? Son { get; set; }

        public int? Daughter { get; set; }
    }
}
