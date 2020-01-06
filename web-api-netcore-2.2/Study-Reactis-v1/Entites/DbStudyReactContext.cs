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
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasData(SeedData.SeedData.Users);

            modelBuilder.Entity<Person>()
                .HasData(SeedData.SeedData.People);

            modelBuilder.Entity<PersonEvent>()
                .HasKey(o => new { o.PersonId, o.EventId });

            modelBuilder.Entity<PersonEvent>()
                .HasOne<Event>(p => p.EventOfPerson)
                .WithMany(e => e.PersonEvents);

            modelBuilder.Entity<JobInformation>()
                .HasKey(j => new { j.JobId, })
        }
    }
}
