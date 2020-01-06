using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Study_Reactis_v1.Entites;

namespace Study_Reactis_v1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(); // Make sure you call this previous to AddMvc
            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .ConfigureApiBehaviorOptions(options =>
                {
                    options.SuppressConsumesConstraintForFormFileParameters = true;
                    options.SuppressInferBindingSourcesForParameters = true;
                    options.SuppressModelStateInvalidFilter = true;
                    options.SuppressMapClientErrors = true;
                    options.ClientErrorMapping[404].Link =
                        "https://httpstatuses.com/404";
                });
            services.AddDbContext<DbStudyReactContext>(options => options.UseSqlServer(this.Configuration.GetConnectionString("StudyReactDb"))
            .EnableSensitiveDataLogging());

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddGoogle(options =>
                {
                    options.ClientId = "7576104169-oruguc3882fi8796ffsi8gmd9ts2hg9j.apps.googleusercontent.com";
                    options.ClientSecret = "YQENRDmuzJv9x5hYipgFIWz-";
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            // Make sure you call this before calling app.UseMvc()
            app.UseCors(
                options => options.WithOrigins("*").AllowAnyMethod()
                // all origins access.
                // options => options.WithOrigins("*").AllowAnyMethod()
            );
            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
