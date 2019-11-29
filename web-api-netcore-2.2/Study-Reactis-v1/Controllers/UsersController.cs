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
        public ActionResult<User> Login(User user)
        {
            var userFromDb = _context.Users.FirstOrDefault( u => (u.UserName == user.UserName && u.Password == user.Password));
            return userFromDb;
        }
    }
}