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
    public class CustomersService : ICustomersService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public CustomersService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<CUSTOMER>> CUSTOMER_SEARCH(CUSTOMER input)
        {
            var store = "EXEC CUSTOMER_SEARCH " + _setSqlParameter.setParamCustomer(input);
            return await _context.CUSTOMER.FromSqlRaw(store).ToListAsync();
        }
        public async Task<InsertResult> CUSTOMER_INSERT(CUSTOMER input)
        {
            var store = "EXEC CUSTOMER_INSERT " + _setSqlParameter.setParamCustomer(input); ;
            return await _context.InsertResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        public async Task<UpdateResult> CUSTOMER_UPDATE(CUSTOMER input)
        {
            var store = "EXEC CUSTOMER_UPDATE " + _setSqlParameter.setParamCustomer(input); ;
            return await _context.UpdateResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        public async Task<DeleteResult> CUSTOMER_DELETE(string id)
        {
            var store = "EXEC CUSTOMER_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        
    }
}
