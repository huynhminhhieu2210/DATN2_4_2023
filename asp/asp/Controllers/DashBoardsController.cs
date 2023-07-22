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
    public class DashBoardsController : AbpController
    {
        private readonly IDashBoardsService _dashBoardsService;
        public DashBoardsController(IDashBoardsService dashBoardsService)
        {
            this._dashBoardsService = dashBoardsService;
        }
        [HttpPost]
        public async Task<IEnumerable<BARCHART>> CHART_BAR_LOAD([FromBody]CHART_BAR_FILTER input)
        {
            return await _dashBoardsService.CHART_BAR_LOAD(input);
        }
        [HttpPost]
        public async Task<IEnumerable<BARCHART>> CHART_BAR2_LOAD([FromBody] CHART_BAR_FILTER input)
        {
            return await _dashBoardsService.CHART_BAR2_LOAD(input);
        }
    }
}
