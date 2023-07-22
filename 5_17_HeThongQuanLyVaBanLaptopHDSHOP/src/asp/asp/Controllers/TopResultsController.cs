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
    public class TopResultsController : AbpController
    {
        private readonly ITopResultsService _topResultsService;
        public TopResultsController(ITopResultsService topResultsService)
        {
            this._topResultsService = topResultsService;
        }
        [HttpPost]
        public async Task<IEnumerable<TOP_RESULT>> TOP_RESULT_SEARCH([FromBody]TOP_RESULT input)
        {
            return await _topResultsService.TOP_RESULT_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> TOP_RESULT_INSERT([FromBody] TOP_RESULT input)
        {
            return await _topResultsService.TOP_RESULT_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> TOP_RESULT_UPDATE([FromBody] TOP_RESULT input)
        {
            return await _topResultsService.TOP_RESULT_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> TOP_RESULT_DELETE(string id)
        {
            return await _topResultsService.TOP_RESULT_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<TOP_RESULT>> TOP_RESULT_BYID(string id)
        {
            return await _topResultsService.TOP_RESULT_BYID(id);
        }
    }
}
