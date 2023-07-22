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
    public class ProductsService : IProductsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public ProductsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<PRODUCT>> PRODUCT_SEARCH(PRODUCT input)
        {
            var store = "EXEC PRODUCT_SEARCH " + _setSqlParameter.setParamProduct(input) + ", @IS_ACTIVE = '" + input.IS_ACTIVE + "'";
            var Result = await _context.PRODUCT.FromSqlRaw(store).ToListAsync();
            return Result;
        }
        public async Task<IEnumerable<PRODUCT>> PRODUCT_CUSTOMER_SEARCH(PRODUCT input)
        {
            var store = "EXEC PRODUCT_CUSTOMER_SEARCH " + _setSqlParameter.setParamProduct(input) + ", @IS_ACTIVE = '" + input.IS_ACTIVE + "'";
            var Result = await _context.PRODUCT.FromSqlRaw(store).ToListAsync();
            return Result;
        }
        public async Task<IEnumerable<PRODUCT>> PRODUCT_SELL_SEARCH(PRODUCT input)
        {
            var store = "EXEC PRODUCT_SELL_SEARCH " + _setSqlParameter.setParamProduct(input) + ", @IS_ACTIVE = '" + input.IS_ACTIVE + "'";
            var Result = await _context.PRODUCT.FromSqlRaw(store).ToListAsync();
            return Result;
        }
        public async Task<IEnumerable<PRODUCT>> PRODUCT_ADMIN_SELL_SEARCH(PRODUCT input)
        {
            var store = "EXEC PRODUCT_ADMIN_SELL_SEARCH " + _setSqlParameter.setParamProduct(input) + ", @IS_ACTIVE = '" + input.IS_ACTIVE + "'";
            var Result = await _context.PRODUCT.FromSqlRaw(store).ToListAsync();
            return Result;
        }
        public async Task<IEnumerable<PRODUCT>> PRODUCT_OUT_OF_STOCK_SEARCH(PRODUCT input)
        {
            var store = "EXEC PRODUCT_OUT_OF_STOCK_SEARCH " + _setSqlParameter.setParamProduct(input) + ", @IS_ACTIVE = '" + input.IS_ACTIVE + "'";
            var Result = await _context.PRODUCT.FromSqlRaw(store).ToListAsync();
            return Result;
        }
        public async Task<IEnumerable<InsertResult>> PRODUCT_INSERT(PRODUCT input)
        {
            var store = "EXEC PRODUCT_INSERT " + _setSqlParameter.setParamProduct(input) + ", @GUARANTEE = '" + input.GUARANTEE + "'";
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<UpdateResult>> PRODUCT_UPDATE(PRODUCT input)
        {
            var store = "EXEC PRODUCT_UPDATE " + _setSqlParameter.setParamProduct(input) + ", @GUARANTEE = '" + input.GUARANTEE + "'";
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> PRODUCT_DELETE(string id)
        {
            var store = "EXEC PRODUCT_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<PRODUCT>> PRODUCT_BYID(string id)
        {
            var store = "EXEC PRODUCT_BYID " + id;
            return await _context.PRODUCT.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<UpdateResult>> PRODUCT_CHANGE_STATUS(PRODUCT input)
        {
            var store = "EXEC PRODUCT_CHANGE_STATUS " + input.PRODUCT_ID;
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();
        }

    }
}
