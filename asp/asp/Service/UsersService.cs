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
        public async Task<IEnumerable<InsertResult>> USER_INSERT(USER input)
        {
            var store = "EXEC USER_INSERT " + _setSqlParameter.setParamUser(input);
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<UpdateResult>> USER_UPDATE(USER input)
        {
            var store = "EXEC USER_UPDATE " + _setSqlParameter.setParamUser(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> USER_DELETE(string id)
        {
            var store = "EXEC USER_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<USER>> USER_BYID(string id)
        {
            var store = "EXEC USER_BYID " + id;
            return await _context.USER.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<USER>> USER_GET_INFO_LOGIN(LOGIN user)
        {
            var store = "EXEC USER_GET_INFO_LOGIN " + _setSqlParameter.setParamLogin(user);
            return await _context.USER.FromSqlRaw(store).ToListAsync();
        }

    }
}
