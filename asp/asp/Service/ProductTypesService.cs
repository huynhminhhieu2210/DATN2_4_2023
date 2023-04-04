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
    public class ProductTypesService : IProductTypesService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public ProductTypesService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<PRODUCT_TYPE>> PRODUCT_TYPE_SEARCH(PRODUCT_TYPE input)
        {
            var store = "EXEC PRODUCT_TYPE_SEARCH " + _setSqlParameter.setParamProductType(input);
            return await _context.PRODUCT_TYPE.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> PRODUCT_TYPE_INSERT(PRODUCT_TYPE input)
        {
            var store = "EXEC PRODUCT_TYPE_INSERT " + _setSqlParameter.setParamProductType(input); ;
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<UpdateResult>> PRODUCT_TYPE_UPDATE(PRODUCT_TYPE input)
        {
            var store = "EXEC PRODUCT_TYPE_UPDATE " + _setSqlParameter.setParamProductType(input); ;
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> PRODUCT_TYPE_DELETE(string id)
        {
            var store = "EXEC PRODUCT_TYPE_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();;
        }
        
    }
}
