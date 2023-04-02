using Abp.AspNetCore.Mvc.Controllers;
using asp.IService;
using asp.Models;
using asp.Models.common;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace asp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CustomersController : AbpController
    {
        private readonly ICustomersService _customersService;
        public CustomersController(ICustomersService customersService)
        {
            this._customersService = customersService;
        }
        [HttpPost]
        public async Task<IEnumerable<CUSTOMER>> CUSTOMER_SEARCH([FromBody]CUSTOMER input)
        {
            return await _customersService.CUSTOMER_SEARCH(input);
        }
        [HttpPost]
        public async Task<InsertResult> CUSTOMER_INSERT([FromBody] CUSTOMER input)
        {
            return await _customersService.CUSTOMER_INSERT(input);
        }
        [HttpPost]
        public async Task<UpdateResult> CUSTOMER_UPDATE([FromBody] CUSTOMER input)
        {
            return await _customersService.CUSTOMER_UPDATE(input);
        }
        [HttpPost]
        public async Task<DeleteResult> CUSTOMER_DELETE(string id)
        {
            return await _customersService.CUSTOMER_DELETE(id);
        }
    }
}
