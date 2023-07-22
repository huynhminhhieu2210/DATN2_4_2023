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
    public class InvoicesService : IInvoicesService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public InvoicesService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<INVOICE>> INVOICE_SEARCH(INVOICE input)
        {
            var store = "EXEC INVOICE_SEARCH " + _setSqlParameter.setParamInvoiceSearch(input);
            return await _context.INVOICE.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> INVOICE_INSERT(INVOICE input)
        {
            var store = "EXEC INVOICE_INSERT " + _setSqlParameter.setParamInvoice(input);
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<UpdateResult>> INVOICE_UPDATE(INVOICE input)
        {
            var store = "EXEC INVOICE_UPDATE " + _setSqlParameter.setParamInvoice(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> INVOICE_DELETE(string id)
        {
            var store = "EXEC INVOICE_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<INVOICE>> INVOICE_BYID(string id)
        {
            var store = "EXEC INVOICE_BYID " + id;
            return await _context.INVOICE.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<UpdateResult>> INVOICE_CHANGE_STATUS(INVOICE input)
        {
            var store = "EXEC INVOICE_CHANGE_STATUS " + _setSqlParameter.setParamInvoice(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync(); ;
        }
        public async Task<IEnumerable<UpdateResult>> INVOICE_CANCEL(INVOICE input)
        {
            var store = "EXEC INVOICE_CANCEL @INVOICE_ID = '" + input.INVOICE_ID + "'"; 
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync(); ;
        }
        public async Task<IEnumerable<UpdateResult>> INVOICE_ACCESS(INVOICE input)
        {
            var store = "EXEC INVOICE_ACCESS @INVOICE_ID = '" + input.INVOICE_ID + "'";
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync(); ;
        }

    }
}
