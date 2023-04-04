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
    public class LogsService : ILogsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public LogsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<LOG>> LOG_SEARCH(LOG input)
        {
            var store = "EXEC LOG_SEARCH " + _setSqlParameter.setParamLog(input);
            return await _context.LOG.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> LOG_INSERT(LOG input)
        {
            var store = "EXEC LOG_INSERT " + _setSqlParameter.setParamLog(input); ;
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<UpdateResult>> LOG_UPDATE(LOG input)
        {
            var store = "EXEC LOG_UPDATE " + _setSqlParameter.setParamLog(input); ;
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> LOG_DELETE(string id)
        {
            var store = "EXEC LOG_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();;
        }
        
    }
}
