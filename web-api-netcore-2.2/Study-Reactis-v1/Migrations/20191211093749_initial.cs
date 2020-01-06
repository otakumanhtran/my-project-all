using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Study_Reactis_v1.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "People",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FullName = table.Column<string>(nullable: true),
                    Birthday = table.Column<DateTime>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    WorkPlace = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_People", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    UserRole = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "Address", "Birthday", "Email", "FullName", "Gender", "Image", "PhoneNumber", "WorkPlace" },
                values: new object[,]
                {
                    { 1, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 1", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 2, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 2", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 3, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 3", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 4, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 4", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 5, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 5", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 6, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 6", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 7, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 7", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 8, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 8", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 9, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 9", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." },
                    { 10, "Cổ Nhuế 2- Hà Nội", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "manh.tran@ntq-solution.com.vn", "Trần Đức Mạnh 10", "Male", "\\Images\\user5.jpg", "0358942987", "Đang làm việc tại Ntq-solution, khu đô thị Sông Đà." }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Password", "UserName", "UserRole" },
                values: new object[,]
                {
                    { 1, "manhtran01", "manhtran01", "admin" },
                    { 2, "manhtran02", "manhtran02", "user" },
                    { 3, "manhtran02", "manhtran03", "user" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "People");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
