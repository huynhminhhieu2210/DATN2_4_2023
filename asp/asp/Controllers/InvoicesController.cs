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
    public class InvoicesController : AbpController
    {
        private readonly IInvoicesService _invoicesService;
        public InvoicesController(IInvoicesService invoicesService)
        {
            this._invoicesService = invoicesService;
        }
        [HttpPost]
        public async Task<IEnumerable<INVOICE>> INVOICE_SEARCH([FromBody]INVOICE input)
        {
            return await _invoicesService.INVOICE_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> INVOICE_INSERT([FromBody] INVOICE input)
        {
            return await _invoicesService.INVOICE_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> INVOICE_UPDATE([FromBody] INVOICE input)
        {
            return await _invoicesService.INVOICE_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> INVOICE_DELETE(string id)
        {
            return await _invoicesService.INVOICE_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<INVOICE>> INVOICE_BYID(string id)
        {
            return await _invoicesService.INVOICE_BYID(id);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> INVOICE_CHANGE_STATUS([FromBody] INVOICE input)
        {
            return await _invoicesService.INVOICE_CHANGE_STATUS(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> INVOICE_CANCEL([FromBody] INVOICE input)
        {
            return await _invoicesService.INVOICE_CANCEL(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> INVOICE_ACCESS([FromBody] INVOICE input)
        {
            return await _invoicesService.INVOICE_ACCESS(input);
        }
    }
}
