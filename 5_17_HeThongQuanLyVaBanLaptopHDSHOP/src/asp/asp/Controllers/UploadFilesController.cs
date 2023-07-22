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
    public class UploadFilesController : AbpController
    {
        private readonly IUploadFilesService _uploadFilesService;
        public UploadFilesController(IUploadFilesService uploadFilesService)
        {
            this._uploadFilesService = uploadFilesService;
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> UPLOAD([FromForm] UPLOADFILE input)
        {
            return await _uploadFilesService.UPLOAD(input);
        }
    }
}
