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
    public class DocImpProductsDetailsController : AbpController
    {
        private readonly IDocImpProductsDetailsService _docImpProductsDetailsService;
        public DocImpProductsDetailsController(IDocImpProductsDetailsService docImpProductsDetailsService)
        {
            this._docImpProductsDetailsService = docImpProductsDetailsService;
        }
        [HttpPost]
        public async Task<IEnumerable<DOC_IMP_PRODUCT_DT>> DOC_IMP_PRODUCT_DT_SEARCH([FromBody]DOC_IMP_PRODUCT_DT input)
        {
            return await _docImpProductsDetailsService.DOC_IMP_PRODUCT_DT_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> DOC_IMP_PRODUCT_DT_INSERT([FromBody] DOC_IMP_PRODUCT_DT input)
        {
            return await _docImpProductsDetailsService.DOC_IMP_PRODUCT_DT_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> DOC_IMP_PRODUCT_DT_UPDATE([FromBody] DOC_IMP_PRODUCT_DT input)
        {
            return await _docImpProductsDetailsService.DOC_IMP_PRODUCT_DT_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> DOC_IMP_PRODUCT_DT_DELETE(string id)
        {
            return await _docImpProductsDetailsService.DOC_IMP_PRODUCT_DT_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<DOC_IMP_PRODUCT_DT>> DOC_IMP_PRODUCT_DT_BYID(string id)
        {
            return await _docImpProductsDetailsService.DOC_IMP_PRODUCT_DT_BYID(id);
        }
    }
}
