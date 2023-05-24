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
    public class WarehousesController : AbpController
    {
        private readonly IWarehousesService _warehousesService;
        public WarehousesController(IWarehousesService warehousesService)
        {
            this._warehousesService = warehousesService;
        }
        [HttpPost]
        public async Task<IEnumerable<WAREHOUSE>> WAREHOUSE_SEARCH([FromBody]WAREHOUSE input)
        {
            return await _warehousesService.WAREHOUSE_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> WAREHOUSE_INSERT([FromBody] WAREHOUSE input)
        {
            return await _warehousesService.WAREHOUSE_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> WAREHOUSE_UPDATE([FromBody] WAREHOUSE input)
        {
            return await _warehousesService.WAREHOUSE_UPDATE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<DeleteResult>> WAREHOUSE_DELETE(string id)
        {
            return await _warehousesService.WAREHOUSE_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<WAREHOUSE>> WAREHOUSE_BYID(string id)
        {
            return await _warehousesService.WAREHOUSE_BYID(id);
        }
    }
}
