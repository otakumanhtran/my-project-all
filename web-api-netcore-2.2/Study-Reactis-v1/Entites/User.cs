using System.ComponentModel.DataAnnotations;

namespace Study_Reactis_v1.Entites
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string UserRole { get; set; }
    }
}
