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
    public class AreasController : AbpController
    {
        private readonly IAreasService _areasService;
        public AreasController(IAreasService areasService)
        {
            this._areasService = areasService;
        }
        [HttpPost]
        public async Task<IEnumerable<AREA>> AREA_SEARCH([FromBody]AREA input)
        {
            return await _areasService.AREA_SEARCH(input);
        }
        [HttpPost]
        public async Task<InsertResult> AREA_INSERT([FromBody] AREA input)
        {
            return await _areasService.AREA_INSERT(input);
        }
        [HttpPost]
        public async Task<UpdateResult> AREA_UPDATE([FromBody] AREA input)
        {
            return await _areasService.AREA_UPDATE(input);
        }
        [HttpPost]
        public async Task<DeleteResult> AREA_DELETE(string id)
        {
            return await _areasService.AREA_DELETE(id);
        }
    }
}
