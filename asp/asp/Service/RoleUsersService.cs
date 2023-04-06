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
    public class RoleUsersService : IRoleUsersService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public RoleUsersService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<ROLE_USER>> ROLE_USER_SEARCH(ROLE_USER input)
        {
            var store = "EXEC ROLE_USER_SEARCH " + _setSqlParameter.setParamRoleUser(input);
            return await _context.ROLE_USER.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> ROLE_USER_INSERT(ROLE_USER input)
        {
            var store = "EXEC ROLE_USER_INSERT " + _setSqlParameter.setParamRoleUser(input);
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<UpdateResult>> ROLE_USER_UPDATE(ROLE_USER input)
        {
            var store = "EXEC ROLE_USER_UPDATE " + _setSqlParameter.setParamRoleUser(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> ROLE_USER_DELETE(string id)
        {
            var store = "EXEC ROLE_USER_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<ROLE_USER>> ROLE_USER_BYID(string id)
        {
            var store = "EXEC ROLE_USER_BYID " + id;
            return await _context.ROLE_USER.FromSqlRaw(store).ToListAsync();
        }

    }
}
