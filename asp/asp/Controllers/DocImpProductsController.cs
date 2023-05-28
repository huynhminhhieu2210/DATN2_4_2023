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
    public class DocImpProductsController : AbpController
    {
        private readonly IDocImpProductsService _docImpProductsService;
        public DocImpProductsController(IDocImpProductsService docImpProductsService)
        {
            this._docImpProductsService = docImpProductsService;
        }
        [HttpPost]
        public async Task<IEnumerable<DOC_IMP_PRODUCT>> DOC_IMP_PRODUCT_SEARCH([FromBody]DOC_IMP_PRODUCT input)
        {
            return await _docImpProductsService.DOC_IMP_PRODUCT_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> DOC_IMP_PRODUCT_INSERT([FromBody] DOC_IMP_PRODUCT input)
        {
            return await _docImpProductsService.DOC_IMP_PRODUCT_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> DOC_IMP_PRODUCT_UPDATE([FromBody] DOC_IMP_PRODUCT input)
        {
            return await _docImpProductsService.DOC_IMP_PRODUCT_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> DOC_IMP_PRODUCT_DELETE(string id)
        {
            return await _docImpProductsService.DOC_IMP_PRODUCT_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<DOC_IMP_PRODUCT>> DOC_IMP_PRODUCT_BYID(string id)
        {
            return await _docImpProductsService.DOC_IMP_PRODUCT_BYID(id);
        }
    }
}
