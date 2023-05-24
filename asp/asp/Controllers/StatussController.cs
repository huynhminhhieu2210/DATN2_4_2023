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
    public class StatussController : AbpController
    {
        private readonly IStatussService _statussService;
        public StatussController(IStatussService statussService)
        {
            this._statussService = statussService;
        }
        [HttpPost]
        public async Task<IEnumerable<STATUS>> STATUS_SEARCH([FromBody] STATUS input)
        {
            return await _statussService.STATUS_SEARCH(input);
        }
    }
}
