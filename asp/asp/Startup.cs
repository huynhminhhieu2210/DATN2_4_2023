
using asp.Data;
using asp.IService;
using asp.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace asp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(option =>
            {
                option.AddPolicy("EnableCORS", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });
            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(option=>
            {
                option.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = "https://localhost:5001",
                    ValidAudience = "https://localhost:5001",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"))
                };
            });
            services.AddTransient<IAreasService, AreasService>();
            services.AddTransient<IBranchsService, BranchsService>();
            services.AddTransient<ILogsService, LogsService>();
            services.AddTransient<IProductTypesService, ProductTypesService>();
            services.AddTransient<ISuppliersService, SuppliersService>();
            services.AddTransient<IUsersService, UsersService>();
            services.AddTransient<IWarehousesService, WarehousesService>();
            services.AddTransient<IRoleUsersService, RoleUsersService>();
            services.AddTransient<IInvoicesService, InvoicesService>();
            services.AddTransient<IInvoiceDetailsService, InvoiceDetailsService>();
            services.AddTransient<IProductsService, ProductsService>();
            services.AddTransient<IUploadFilesService, UploadFilesService>();
            services.AddTransient<ICartsService, CartsService>();
            services.AddTransient<IStatussService, StatussService>();
            services.AddTransient<IDashBoardsService, DashBoardsService>();
            services.AddTransient<IDocImpProductsDetailsService, DocImpProductsDetailsService>();
            services.AddTransient<IDocImpProductsService, DocImpProductsService>();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "asp", Version = "v1" });
            });
            services.AddDbContext<aspContext>(options =>
                   options.UseSqlServer(Configuration.GetConnectionString("Default")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "asp v1"));
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors("EnableCORS");
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
