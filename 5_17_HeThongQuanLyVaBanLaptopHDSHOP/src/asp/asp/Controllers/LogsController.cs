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
    public class LogsController : AbpController
    {
        private readonly ILogsService _LOGService;
        public LogsController(ILogsService LOGService)
        {
            this._LOGService = LOGService;
        }
        [HttpPost]
        public async Task<IEnumerable<LOG>> LOG_SEARCH([FromBody]LOG input)
        {
            return await _LOGService.LOG_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> LOG_INSERT([FromBody] LOG input)
        {
            return await _LOGService.LOG_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> LOG_UPDATE([FromBody] LOG input)
        {
            return await _LOGService.LOG_UPDATE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<DeleteResult>> LOG_DELETE(string id)
        {
            return await _LOGService.LOG_DELETE(id);
        }
    }
}
