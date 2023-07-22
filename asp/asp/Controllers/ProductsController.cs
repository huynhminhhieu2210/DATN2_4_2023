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
    public class ProductsController : AbpController
    {
        private readonly IProductsService _productsService;
        public ProductsController(IProductsService productsService)
        {
            this._productsService = productsService;
        }
        [HttpPost]
        public async Task<IEnumerable<PRODUCT>> PRODUCT_SEARCH([FromBody]PRODUCT input)
        {
            return await _productsService.PRODUCT_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<PRODUCT>> PRODUCT_CUSTOMER_SEARCH([FromBody] PRODUCT input)
        {
            return await _productsService.PRODUCT_CUSTOMER_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<PRODUCT>> PRODUCT_SELL_SEARCH([FromBody] PRODUCT input)
        {
            return await _productsService.PRODUCT_SELL_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<PRODUCT>> PRODUCT_ADMIN_SELL_SEARCH([FromBody] PRODUCT input)
        {
            return await _productsService.PRODUCT_ADMIN_SELL_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<PRODUCT>> PRODUCT_OUT_OF_STOCK_SEARCH([FromBody] PRODUCT input)
        {
            return await _productsService.PRODUCT_OUT_OF_STOCK_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> PRODUCT_INSERT([FromBody] PRODUCT input)
        {
            return await _productsService.PRODUCT_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> PRODUCT_UPDATE([FromBody] PRODUCT input)
        {
            return await _productsService.PRODUCT_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> PRODUCT_DELETE(string id)
        {
            return await _productsService.PRODUCT_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<PRODUCT>> PRODUCT_BYID(string id)
        {
            return await _productsService.PRODUCT_BYID(id);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> PRODUCT_CHANGE_STATUS([FromBody] PRODUCT input)
        {
            return await _productsService.PRODUCT_CHANGE_STATUS(input);
        }
    }
}
