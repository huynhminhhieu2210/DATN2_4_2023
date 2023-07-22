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
    public class SuppliersController : AbpController
    {
        private readonly ISuppliersService _suppliersService;
        public SuppliersController(ISuppliersService suppliersService)
        {
            this._suppliersService = suppliersService;
        }
        [HttpPost]
        public async Task<IEnumerable<SUPPLIER>> SUPPLIER_SEARCH([FromBody]SUPPLIER input)
        {
            return await _suppliersService.SUPPLIER_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> SUPPLIER_INSERT([FromBody] SUPPLIER input)
        {
            return await _suppliersService.SUPPLIER_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> SUPPLIER_UPDATE([FromBody] SUPPLIER input)
        {
            return await _suppliersService.SUPPLIER_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> SUPPLIER_DELETE(string id)
        {
            return await _suppliersService.SUPPLIER_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<SUPPLIER>> SUPPLIER_BYID(string id)
        {
            return await _suppliersService.SUPPLIER_BYID(id);
        }
    }
}
