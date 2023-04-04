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
    public class SuppliersService : ISuppliersService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public SuppliersService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<SUPPLIER>> SUPPLIER_SEARCH(SUPPLIER input)
        {
            var store = "EXEC SUPPLIER_SEARCH " + _setSqlParameter.setParamSupplier(input);
            return await _context.SUPPLIER.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> SUPPLIER_INSERT(SUPPLIER input)
        {
            var store = "EXEC SUPPLIER_INSERT " + _setSqlParameter.setParamSupplier(input); ;
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<UpdateResult>> SUPPLIER_UPDATE(SUPPLIER input)
        {
            var store = "EXEC SUPPLIER_UPDATE " + _setSqlParameter.setParamSupplier(input); ;
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> SUPPLIER_DELETE(string id)
        {
            var store = "EXEC SUPPLIER_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();;
        }
        
    }
}
