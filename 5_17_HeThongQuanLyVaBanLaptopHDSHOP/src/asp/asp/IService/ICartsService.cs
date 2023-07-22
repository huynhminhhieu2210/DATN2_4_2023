using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface ICartsService : IApplicationService
    {
        Task<IEnumerable<INVOICE_DT>> CART_LOAD(string userlogin);
        Task<IEnumerable<UpdateResult>> CART_UPDATE(INVOICE input);
        Task<IEnumerable<DeleteResult>> CART_DELETE(INPUTADDCART input);
        Task<IEnumerable<InsertResult>> CART_ADD_PRODUCT(INPUTADDCART input);
        Task<IEnumerable<UpdateResult>> CART_CHECKOUT(INVOICE input);
    }
}
