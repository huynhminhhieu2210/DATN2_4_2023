﻿using Abp.AspNetCore.Mvc.Controllers;
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
        public async Task<InsertResult> USER_INSERT([FromBody] USER input)
        {
            return await _userService.USER_INSERT(input);
        }
        [HttpPost]
        public async Task<UpdateResult> USER_UPDATE([FromBody] USER input)
        {
            return await _userService.USER_UPDATE(input);
        }
        [HttpPost]
        public async Task<DeleteResult> USER_DELETE(string id)
        {
            return await _userService.USER_DELETE(id);
        }
    }
}