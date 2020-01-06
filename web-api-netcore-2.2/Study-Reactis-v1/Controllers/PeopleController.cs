using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Study_Reactis_v1.Entites;
using Study_Reactis_v1.ViewModel;

namespace Study_Reactis_v1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly DbStudyReactContext _context;
        private readonly IHostingEnvironment _hostingEnvironment;

        public PeopleController(DbStudyReactContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        // GET: api/People
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonViewModel>>> GetPeople()
        {
            var people = await _context.People.ToListAsync();
            string baseUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}/Images";

            var peopleDisplay = people.Select(p => new PersonViewModel {
                PersonId = p.PersonId,
                FullName = p.FullName,
                Birthday = p.Birthday,
                Gender = p.Gender,
                Email = p.Email,
                Address = p.Address,
                PhoneNumber = p.PhoneNumber,
                Image = $"{baseUrl}/{p.Image}",
                jobId = p.JobId
            }).ToArray();

            if (peopleDisplay == null) return new List<PersonViewModel>();

            return peopleDisplay;
        }

        // GET: api/People/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetPerson(int id)
        {
            var person = await _context.People.FindAsync(id);

            if (person == null)
            {
                return NotFound();
            }

            return person;
        }

        // PUT: api/People/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerson(int id, Person person)
        {
            if (id != person.PersonId)
            {
                return BadRequest();
            }

            _context.Entry(person).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/People
        [HttpPost]
        public async Task<ActionResult<Person>> PostPerson(Person person)
        {
            _context.People.Add(person);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerson", new { id = person.PersonId }, person);
        }

        // DELETE: api/People/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Person>> DeletePerson(int id)
        {
            var person = await _context.People.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            _context.People.Remove(person);
            await _context.SaveChangesAsync();

            return person;
        }

        private bool PersonExists(int id)
        {
            return _context.People.Any(e => e.PersonId == id);
        }
    }
}
