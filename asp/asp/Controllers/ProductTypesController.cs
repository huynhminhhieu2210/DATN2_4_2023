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
    public class ProductTypesController : AbpController
    {
        private readonly IProductTypesService _productTypesService;
        public ProductTypesController(IProductTypesService productTypesService)
        {
            this._productTypesService = productTypesService;
        }
        [HttpPost]
        public async Task<IEnumerable<PRODUCT_TYPE>> PRODUCT_TYPE_SEARCH([FromBody]PRODUCT_TYPE input)
        {
            return await _productTypesService.PRODUCT_TYPE_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> PRODUCT_TYPE_INSERT([FromBody] PRODUCT_TYPE input)
        {
            return await _productTypesService.PRODUCT_TYPE_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> PRODUCT_TYPE_UPDATE([FromBody] PRODUCT_TYPE input)
        {
            return await _productTypesService.PRODUCT_TYPE_UPDATE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<DeleteResult>> PRODUCT_TYPE_DELETE(string id)
        {
            return await _productTypesService.PRODUCT_TYPE_DELETE(id);
        }
    }
}
