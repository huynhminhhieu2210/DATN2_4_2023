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
    public class BranchsService : IBranchsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public BranchsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<BRANCH>> BRANCH_SEARCH(BRANCH input)
        {
            var store = "EXEC BRANCH_SEARCH " + _setSqlParameter.setParamBranch(input);
            return await _context.BRANCH.FromSqlRaw(store).ToListAsync();
        }
        public async Task<InsertResult> BRANCH_INSERT(BRANCH input)
        {
            var store = "EXEC BRANCH_INSERT " + _setSqlParameter.setParamBranch(input); ;
            return await _context.InsertResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        public async Task<UpdateResult> BRANCH_UPDATE(BRANCH input)
        {
            var store = "EXEC BRANCH_UPDATE " + _setSqlParameter.setParamBranch(input); ;
            return await _context.UpdateResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        public async Task<DeleteResult> BRANCH_DELETE(string id)
        {
            var store = "EXEC BRANCH_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).FirstOrDefaultAsync();
        }
        
    }
}
