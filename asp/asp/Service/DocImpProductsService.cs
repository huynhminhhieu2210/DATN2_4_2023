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
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace asp.Service
{
    public class DocImpProductsService : IDocImpProductsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        public DocImpProductsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<DOC_IMP_PRODUCT>> DOC_IMP_PRODUCT_SEARCH(DOC_IMP_PRODUCT input)
        {
            var store = "EXEC DOC_IMP_PRODUCT_SEARCH " + _setSqlParameter.setParamDocImpProduct(input);
            return await _context.DOC_IMP_PRODUCT.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<InsertResult>> DOC_IMP_PRODUCT_INSERT(DOC_IMP_PRODUCT input)
        {
            input.XML_DOC_IMP_PRODUCT_DT = ConvertObjectToXMLString(input.LST_DOC_IMP_PRODUCT_DT);
            var store = "EXEC DOC_IMP_PRODUCT_INSERT " + _setSqlParameter.setParamDocImpProduct(input) + ", @XML_DOC_IMP_PRODUCT_DT = N'" + input.XML_DOC_IMP_PRODUCT_DT + "'";
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<UpdateResult>> DOC_IMP_PRODUCT_UPDATE(DOC_IMP_PRODUCT input)
        {
            input.XML_DOC_IMP_PRODUCT_DT = ConvertObjectToXMLString(input.LST_DOC_IMP_PRODUCT_DT);
            var store = "EXEC DOC_IMP_PRODUCT_UPDATE " + _setSqlParameter.setParamDocImpProduct(input) + ", @XML_DOC_IMP_PRODUCT_DT = N'" + input.XML_DOC_IMP_PRODUCT_DT + "'";
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<DeleteResult>> DOC_IMP_PRODUCT_DELETE(string id)
        {
            var store = "EXEC DOC_IMP_PRODUCT_DELETE " + id;
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<DOC_IMP_PRODUCT>> DOC_IMP_PRODUCT_BYID(string id)
        {
            var store = "EXEC DOC_IMP_PRODUCT_BYID " + id;
            return await _context.DOC_IMP_PRODUCT.FromSqlRaw(store).ToListAsync();
        }
        static string ConvertObjectToXMLString(object classObject)
        {
            string xmlString = null;
            XmlSerializer xmlSerializer = new XmlSerializer(classObject.GetType());
            using (MemoryStream memoryStream = new MemoryStream())
            {
                xmlSerializer.Serialize(memoryStream, classObject);
                memoryStream.Position = 0;
                xmlString = new StreamReader(memoryStream).ReadToEnd();
            }
            return xmlString;
        }
        public async Task<IEnumerable<UpdateResult>> DOC_IMP_PRODUCT_ACCESS(Approve input)
        {
            var store = "EXEC DOC_IMP_PRODUCT_ACCESS " + _setSqlParameter.setParamApprove(input);
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync(); ;
        }
    }
}
