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
    public class UsersService: IUsersService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public UsersService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<USER>> USER_SEARCH(USER input)
        {
            var store = "EXEC USER_SEARCH " + _setSqlParameter.setParamUser(input);
            return await _context.USER.FromSqlRaw(store).ToListAsync();
        }
        public async Task<InsertResult> USER_INSERT(USER input)
        {
            var store = "EXEC USER_INSERT " + _setSqlParameter.setParamUser(input); ;
            return await _context.InsertResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        public async Task<UpdateResult> USER_UPDATE(USER input)
        {
            var store = "EXEC USER_UPDATE " + _setSqlParameter.setParamUser(input); ;
            return await _context.UpdateResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        public async Task<DeleteResult> USER_DELETE(string id)
        {
            var store = "EXEC USER_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        
    }
}
