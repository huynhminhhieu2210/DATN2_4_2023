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
    public class TopResultsService : ITopResultsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public TopResultsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<TOP_RESULT>> TOP_RESULT_SEARCH(TOP_RESULT input)
        {
            var store = "EXEC TOP_RESULT_SEARCH " + _setSqlParameter.setParamTopResult(input);
            return await _context.TOP_RESULT.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> TOP_RESULT_INSERT(TOP_RESULT input)
        {
            var store = "EXEC TOP_RESULT_INSERT " + _setSqlParameter.setParamTopResult(input);
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<UpdateResult>> TOP_RESULT_UPDATE(TOP_RESULT input)
        {
            var store = "EXEC TOP_RESULT_UPDATE " + _setSqlParameter.setParamTopResult(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> TOP_RESULT_DELETE(string id)
        {
            var store = "EXEC TOP_RESULT_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<TOP_RESULT>> TOP_RESULT_BYID(string id)
        {
            var store = "EXEC TOP_RESULT_BYID " + id;
            return await _context.TOP_RESULT.FromSqlRaw(store).ToListAsync();
        }

    }
}
