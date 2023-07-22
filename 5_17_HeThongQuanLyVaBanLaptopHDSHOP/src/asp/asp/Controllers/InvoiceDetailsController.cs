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
    public class InvoiceDetailsController : AbpController
    {
        private readonly IInvoiceDetailsService _invoiceDetailsService;
        public InvoiceDetailsController(IInvoiceDetailsService invoiceDetailsService)
        {
            this._invoiceDetailsService = invoiceDetailsService;
        }
        [HttpPost]
        public async Task<IEnumerable<INVOICE_DT>> INVOICE_DT_SEARCH([FromBody]INVOICE_DT input)
        {
            return await _invoiceDetailsService.INVOICE_DT_SEARCH(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> INVOICE_DT_INSERT([FromBody] INVOICE_DT input)
        {
            return await _invoiceDetailsService.INVOICE_DT_INSERT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> INVOICE_DT_UPDATE([FromBody] INVOICE_DT input)
        {
            return await _invoiceDetailsService.INVOICE_DT_UPDATE(input);
        }
        [HttpDelete("{id}")]
        public async Task<IEnumerable<DeleteResult>> INVOICE_DT_DELETE(string id)
        {
            return await _invoiceDetailsService.INVOICE_DT_DELETE(id);
        }
        [HttpGet("{id}")]
        public async Task<IEnumerable<INVOICE_DT>> INVOICE_DT_BYID(string id)
        {
            return await _invoiceDetailsService.INVOICE_DT_BYID(id);
        }
    }
}
