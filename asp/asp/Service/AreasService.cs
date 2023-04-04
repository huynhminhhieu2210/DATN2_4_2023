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
    public class AreasService : IAreasService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public AreasService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<AREA>> AREA_SEARCH(AREA input)
        {
            var store = "EXEC AREA_SEARCH " + _setSqlParameter.setParamArea(input);
            return await _context.AREA.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> AREA_INSERT(AREA input)
        {
            var store = "EXEC AREA_INSERT " + _setSqlParameter.setParamArea(input);
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<UpdateResult>> AREA_UPDATE(AREA input)
        {
            var store = "EXEC AREA_UPDATE " + _setSqlParameter.setParamArea(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> AREA_DELETE(string id)
        {
            var store = "EXEC AREA_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<AREA>> AREA_BYID(string id)
        {
            var store = "EXEC AREA_BYID " + id;
            return await _context.AREA.FromSqlRaw(store).ToListAsync();
        }

    }
}
