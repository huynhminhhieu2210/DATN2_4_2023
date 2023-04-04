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
    public class BranchsController : AbpController
    {
        private readonly IBranchsService _branchsService;
        public BranchsController(IBranchsService branchsService)
        {
            this._branchsService = branchsService;
        }
        [HttpPost]
        public async Task<IEnumerable<BRANCH>> BRANCH_SEARCH([FromBody]BRANCH input)
        {
            return await _branchsService.BRANCH_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> BRANCH_INSERT([FromBody] BRANCH input)
        {
            return await _branchsService.BRANCH_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> BRANCH_UPDATE([FromBody] BRANCH input)
        {
            return await _branchsService.BRANCH_UPDATE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<DeleteResult>> BRANCH_DELETE(string id)
        {
            return await _branchsService.BRANCH_DELETE(id);
        }
    }
}
