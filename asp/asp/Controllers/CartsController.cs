using Abp.AspNetCore.Mvc.Controllers;
using asp.IService;
using asp.Models;
using asp.Models.common;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
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
    public class CartsController : AbpController
    {
        private readonly ICartsService _cartService;
        public CartsController(ICartsService cartService)
        {
            this._cartService = cartService;
        }
        [HttpGet("{userlogin}")]
        public async Task<IEnumerable<INVOICE_DT>> CART_LOAD(string userlogin)
        {
            return await _cartService.CART_LOAD(userlogin);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> CART_UPDATE([FromBody] INVOICE input)
        {
            return await _cartService.CART_UPDATE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> CART_ADD_PRODUCT([FromBody] INPUTADDCART input)
        {
            return await _cartService.CART_ADD_PRODUCT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<DeleteResult>> CART_DELETE(INPUTADDCART input)
        {
            return await _cartService.CART_DELETE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> CART_CHECKOUT(INVOICE input)
        {
            return await _cartService.CART_CHECKOUT(input);
        }
    }
}
