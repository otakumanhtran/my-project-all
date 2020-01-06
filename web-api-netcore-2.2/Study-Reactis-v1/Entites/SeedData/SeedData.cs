using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Study_Reactis_v1.Entites.SeedData
{
    public static class SeedData
    {
        private static readonly List<Person> people = new List<Person>()
        {
            new Person { PersonId= 1, FullName=@"Trần Đức Mạnh 1", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 2, FullName=@"Trần Đức Mạnh 2", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 3, FullName=@"Trần Đức Mạnh 3", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 4, FullName=@"Trần Đức Mạnh 4", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 5, FullName=@"Trần Đức Mạnh 5", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 6, FullName=@"Trần Đức Mạnh 6", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 7, FullName=@"Trần Đức Mạnh 7", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 8, FullName=@"Trần Đức Mạnh 8", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 9, FullName=@"Trần Đức Mạnh 9", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" },
            new Person { PersonId= 10, FullName=@"Trần Đức Mạnh 10", Birthday= new DateTime(), Gender="Male", Email="manh.tran@ntq-solution.com.vn", Address="Cổ Nhuế 2- Hà Nội", PhoneNumber="0358942987", JobId=null, Image=@"\Images\user5.jpg" }
        };
        public static List<Person> People => people;

        private static readonly List<JobInformation> jobs = new List<JobInformation>()
        {
            new JobInformation {JobId=1, CompanyName="Ntq-solution", Address="Tòa nhà HH3 Sudico Mễ Trì-Nam Từ Liêm-Hà Nội", StartDate= new DateTime(2018,11,30), EndDate=null}
        };
        public static List<JobInformation> Jobs => jobs;

        private static readonly List<User> users = new List<User>()
        {
            new User { UserId=1, UserName="manhtran01", Password="manhtran01", UserRole="admin" },
            new User { UserId=2, UserName="manhtran02", Password="manhtran02", UserRole="user" },
            new User { UserId=3, UserName="manhtran03", Password="manhtran02", UserRole="user" }
        };
        public static List<User> Users => users;

        private static readonly List<Event> events = new List<Event>()
        {
            new Event {EventId=1, EventName="Birthday"},
            new Event {EventId=2, EventName="Wedding anniversary"},
            new Event {EventId=3, EventName="Date of death"}
        };
        public static List<Event> Events => events;

        private static readonly List<PersonEvent> personEvents = new List<PersonEvent>()
        {
            new PersonEvent {EventId=1, PersonId=1, Time="01/02"},
        };
        public static List<PersonEvent> PersonEvents => personEvents;
    }
}
