using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Study_Reactis_v1.Entites;

namespace Study_Reactis_v1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DbStudyReactContext _context;

        public UsersController(DbStudyReactContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Login")]
        public List<string> Login(User user)
        {
            if(!ModelState.IsValid)
            {
                return this.ModelState.Keys
                .SelectMany(key => ModelState[key].Errors.Select(error => error.ErrorMessage)).ToList();
            }

            return new List<string>();
        }
    }
}