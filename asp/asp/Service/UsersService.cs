using asp.Data;
using asp.IService;
using asp.Models;
using asp.Models.common;
using Dapper;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace asp.Service
{
    public class UsersService: IUsersService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        private readonly RandomNumberGenerator _rng;
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
            input.USER_PASSWORD = BCrypt.Net.BCrypt.HashPassword(input.USER_PASSWORD);
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
        public async Task<IEnumerable<UpdateResult>> USER_UPDATE_INFO(USER input)
        {
            var store = "EXEC USER_UPDATE_INFO " + _setSqlParameter.setParamUser(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<ADDRESS_RECEIVE>> USER_LOAD_ADDRESS_RECEIVE(string userlogin)
        {
            var store = "EXEC USER_LOAD_ADDRESS_RECEIVE " + userlogin;
            return await _context.ADDRESS_RECEIVE.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<DeleteResult>> USER_DELETE_ADDRESS_RECEIVE(string id)
        {
            var store = "EXEC USER_DELETE_ADDRESS_RECEIVE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync(); ;
        }
        public async Task<IEnumerable<UpdateResult>> USER_UPDATE_ADDRESS_RECEIVE(ADDRESS_RECEIVE input)
        {
            var store = "EXEC USER_UPDATE_ADDRESS_RECEIVE @ADDRESS_RECEIVE_ID = '" + input.ADDRESS_RECEIVE_ID + "', @ADDRESS_RECEIVE_NAME = N'" + input.ADDRESS_RECEIVE_NAME + "'";
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync(); ;
        }
        public async Task<IEnumerable<InsertResult>> USER_INSERT_ADDRESS_RECEIVE(ADDRESS_RECEIVE input)
        {
            var store = "EXEC USER_INSERT_ADDRESS_RECEIVE @ADDRESS_RECEIVE_ID = '" + input.ADDRESS_RECEIVE_ID + "', @ADDRESS_RECEIVE_NAME = N'" 
                + input.ADDRESS_RECEIVE_NAME + "', @USER_ID = '" + input.USER_ID + "'";
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync(); ;
        }
        public async Task<IEnumerable<UpdateResult>> USER_CHANGE_PASSWORD(INPUTCHANGEPASS input)
        {
            var store = "EXEC LOGIN_WEB @USER_NAME = '" + input.USER_NAME + "', @TYPE = '" + input.TYPE + "'";
            var checkuser = await _context.USER.FromSqlRaw(store).ToListAsync();
            var check = '0';
            if (checkuser != null && BCrypt.Net.BCrypt.Verify(input.USER_PASSWORD, checkuser[0].USER_PASSWORD))
            {
                check = '1';
            }
            else
            {
                check = '0';
            }
            var store2 = "EXEC USER_CHANGE_PASSWORD @USER_NAME = '" + input.USER_NAME + 
                "', @USER_PASSWORD = '" + BCrypt.Net.BCrypt.HashPassword(input.USER_PASSWORDNEW) + 
                "', @CHECK = '" + check + "'";
            return await _context.UpdateResult.FromSqlRaw(store2).ToListAsync(); ;
        }
    }
}
