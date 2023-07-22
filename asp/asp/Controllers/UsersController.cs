using Abp.AspNetCore.Mvc.Controllers;
using Abp.Net.Mail;
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
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace asp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsersController : AbpController
    {
        private readonly IUsersService _userService;
        public UsersController(IUsersService userService)
        {
            this._userService = userService;
        }
        [HttpPost]
        public async Task<IEnumerable<USER>> USER_SEARCH([FromBody]USER input)
        {
            return await _userService.USER_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> USER_INSERT([FromBody] USER input)
        {
            return await _userService.USER_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> USER_UPDATE([FromBody] USER input)
        {
            return await _userService.USER_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> USER_DELETE(string id)
        {
            return await _userService.USER_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<USER>> USER_BYID(string id)
        {
            return await _userService.USER_BYID(id);
        }
        [HttpPost]
        public async Task<IEnumerable<USER>> USER_GET_INFO_LOGIN(LOGIN input)
        {
            return await _userService.USER_GET_INFO_LOGIN(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> USER_UPDATE_INFO([FromBody] USER input)
        {
            return await _userService.USER_UPDATE_INFO(input);
        }
        [HttpGet("{userlogin}")]
        public async Task<IEnumerable<ADDRESS_RECEIVE>> USER_LOAD_ADDRESS_RECEIVE(string userlogin)
        {
            return await _userService.USER_LOAD_ADDRESS_RECEIVE(userlogin);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> USER_UPDATE_ADDRESS_RECEIVE([FromBody] ADDRESS_RECEIVE input)
        {
            return await _userService.USER_UPDATE_ADDRESS_RECEIVE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> USER_DELETE_ADDRESS_RECEIVE(string id)
        {
            return await _userService.USER_DELETE_ADDRESS_RECEIVE(id);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> USER_INSERT_ADDRESS_RECEIVE([FromBody] ADDRESS_RECEIVE input)
        {
            return await _userService.USER_INSERT_ADDRESS_RECEIVE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> USER_CHANGE_PASSWORD([FromBody] INPUTCHANGEPASS input)
        {
            return await _userService.USER_CHANGE_PASSWORD(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> USER_REGISTER([FromBody] REGISTER input)
        {
            return await _userService.USER_REGISTER(input);
        }
    }
}
