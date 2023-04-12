using asp.Data;
using asp.IService;
using asp.Models;
using asp.Models.common;
using Dapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Service
{
    public class InvoiceDetailsService : IInvoiceDetailsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public InvoiceDetailsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<INVOICE_DT>> INVOICE_DT_SEARCH(INVOICE_DT input)
        {
            var store = "EXEC INVOICE_DT_SEARCH " + _setSqlParameter.setParamInvoiceDetail(input);
            return await _context.INVOICE_DT.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> INVOICE_DT_INSERT(INVOICE_DT input)
        {
            var store = "EXEC INVOICE_DT_INSERT " + _setSqlParameter.setParamInvoiceDetail(input);
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<UpdateResult>> INVOICE_DT_UPDATE(INVOICE_DT input)
        {
            var store = "EXEC INVOICE_DT_UPDATE " + _setSqlParameter.setParamInvoiceDetail(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> INVOICE_DT_DELETE(string id)
        {
            var store = "EXEC INVOICE_DT_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<INVOICE_DT>> INVOICE_DT_BYID(string id)
        {
            var store = "EXEC INVOICE_DT_BYID " + id;
            return await _context.INVOICE_DT.FromSqlRaw(store).ToListAsync();
        }

    }
}
