using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Study_Reactis_v1.Entites
{
    public class DbStudyReactContext : DbContext
    {
        public DbStudyReactContext(DbContextOptions<DbStudyReactContext> options)
            : base(options)
        { }

        public DbSet<Person> People { get; set; }
    }
}
