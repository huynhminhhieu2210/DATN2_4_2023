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
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace asp.Service
{
    public class CartsService : ICartsService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        private readonly RandomNumberGenerator _rng;
        public CartsService(aspContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<INVOICE_DT>> CART_LOAD(string userlogin)
        {
            var store = "EXEC CART_LOAD @USER_LOGIN = '" + userlogin + "'";
            var result = await _context.INVOICE_DT.FromSqlRaw(store).ToListAsync();
            return result;
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
        public async Task<IEnumerable<UpdateResult>> CART_UPDATE(INVOICE input)
        {
            input.XML_INVOICE_DT = ConvertObjectToXMLString(input.LST_INVOICE_DT);
            var store = "EXEC CART_UPDATE @USER_LOGIN = '" + input.CREATE_ID + "'" + ", @XML_INVOICE_DT = '" + input.XML_INVOICE_DT + "'";
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<InsertResult>> CART_ADD_PRODUCT(INPUTADDCART input)
        {
            var store = "EXEC CART_ADD_PRODUCT @PRODUCT_ID = '" + input.ID + "', @USER_LOGIN = '" + input.USER_LOGIN + "'";
            return await _context.InsertResult.FromSqlRaw(store).ToListAsync();
        }
        public async Task<IEnumerable<DeleteResult>> CART_DELETE(INPUTADDCART input)
        {
            var store = "EXEC CART_DELETE @PRODUCT_ID = '" + input.ID + "', @USER_LOGIN = '" + input.USER_LOGIN + "'";
            return await _context.DeleteResult.FromSqlRaw(store).ToListAsync();;
        }
        public async Task<IEnumerable<UpdateResult>> CART_CHECKOUT(INVOICE input)
        {
            var store = "EXEC CART_CHECKOUT " + _setSqlParameter.setParamInvoice(input) + ", @METHOD_PAY = N'" + input.METHOD_PAY + "'";
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync(); ;
        }
    }
}
