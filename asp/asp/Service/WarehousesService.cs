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
    public class WarehousesService : IWarehousesService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public WarehousesService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<WAREHOUSE>> WAREHOUSE_SEARCH(WAREHOUSE input)
        {
            var store = "EXEC WAREHOUSE_SEARCH " + _setSqlParameter.setParamWarehouse(input);
            return await _context.WAREHOUSE.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> WAREHOUSE_INSERT(WAREHOUSE input)
        {
            var store = "EXEC WAREHOUSE_INSERT " + _setSqlParameter.setParamWarehouse(input); ;
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<UpdateResult>> WAREHOUSE_UPDATE(WAREHOUSE input)
        {
            var store = "EXEC WAREHOUSE_UPDATE " + _setSqlParameter.setParamWarehouse(input); ;
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> WAREHOUSE_DELETE(string id)
        {
            var store = "EXEC WAREHOUSE_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();;
        }
        
    }
}
