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
    public class StatussService : IStatussService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public StatussService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<STATUS>> STATUS_SEARCH(STATUS input)
        {
            var store = "EXEC STATUS_SEARCH " + _setSqlParameter.setParamStatus(input);
            return await _context.STATUS.FromSqlRaw(store).ToListAsync();
        }
    }
}
