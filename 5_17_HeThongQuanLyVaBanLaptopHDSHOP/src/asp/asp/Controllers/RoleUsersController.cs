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
    public class RoleUsersController : AbpController
    {
        private readonly IRoleUsersService _roleUsersService;
        public RoleUsersController(IRoleUsersService roleUsersService)
        {
            this._roleUsersService = roleUsersService;
        }
        [HttpPost]
        public async Task<IEnumerable<ROLE_USER>> ROLE_USER_SEARCH([FromBody]ROLE_USER input)
        {
            return await _roleUsersService.ROLE_USER_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> ROLE_USER_INSERT([FromBody] ROLE_USER input)
        {
            return await _roleUsersService.ROLE_USER_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> ROLE_USER_UPDATE([FromBody] ROLE_USER input)
        {
            return await _roleUsersService.ROLE_USER_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> ROLE_USER_DELETE(string id)
        {
            return await _roleUsersService.ROLE_USER_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<ROLE_USER>> ROLE_USER_BYID(string id)
        {
            return await _roleUsersService.ROLE_USER_BYID(id);
        }
    }
}
