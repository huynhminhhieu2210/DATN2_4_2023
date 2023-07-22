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
    public class DocImpProductsDetailsService : IDocImpProductsDetailsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public DocImpProductsDetailsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<DOC_IMP_PRODUCT_DT>> DOC_IMP_PRODUCT_DT_SEARCH(DOC_IMP_PRODUCT_DT input)
        {
            var store = "EXEC DOC_IMP_PRODUCT_DT_SEARCH " + _setSqlParameter.setParamDocImpProductDetail(input);
            return await _context.DOC_IMP_PRODUCT_DT.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> DOC_IMP_PRODUCT_DT_INSERT(DOC_IMP_PRODUCT_DT input)
        {
            var store = "EXEC DOC_IMP_PRODUCT_DT_INSERT " + _setSqlParameter.setParamDocImpProductDetail(input);
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<UpdateResult>> DOC_IMP_PRODUCT_DT_UPDATE(DOC_IMP_PRODUCT_DT input)
        {
            var store = "EXEC DOC_IMP_PRODUCT_DT_UPDATE " + _setSqlParameter.setParamDocImpProductDetail(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> DOC_IMP_PRODUCT_DT_DELETE(string id)
        {
            var store = "EXEC DOC_IMP_PRODUCT_DT_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<DOC_IMP_PRODUCT_DT>> DOC_IMP_PRODUCT_DT_BYID(string id)
        {
            var store = "EXEC DOC_IMP_PRODUCT_DT_BYID " + id;
            return await _context.DOC_IMP_PRODUCT_DT.FromSqlRaw(store).ToListAsync();
        }

    }
}
