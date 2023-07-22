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
    public class DashBoardsService : IDashBoardsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public DashBoardsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<BARCHART>> CHART_BAR_LOAD(CHART_BAR_FILTER input)
        {
            var store = "EXEC CHART_BAR_LOAD @FROM_DATE = N'" + input.FROM_DATE + "', @TO_DATE = N'" + input.TO_DATE + "'";
            return await _context.BARCHART.FromSqlRaw(store).ToListAsync();
        }

    }
}
