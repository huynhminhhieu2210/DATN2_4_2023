using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IProductsService : IApplicationService
    {
        Task<IEnumerable<PRODUCT>> PRODUCT_SEARCH(PRODUCT input);
        Task<IEnumerable<PRODUCT>> PRODUCT_CUSTOMER_SEARCH(PRODUCT input);
        Task<IEnumerable<PRODUCT>> PRODUCT_SELL_SEARCH(PRODUCT input);
        Task<IEnumerable<PRODUCT>> PRODUCT_ADMIN_SELL_SEARCH(PRODUCT input);
        Task<IEnumerable<PRODUCT>> PRODUCT_OUT_OF_STOCK_SEARCH(PRODUCT input);
        Task<IEnumerable<InsertResult>> PRODUCT_INSERT(PRODUCT input);
        Task<IEnumerable<UpdateResult>> PRODUCT_UPDATE(PRODUCT input);
        Task<IEnumerable<DeleteResult>> PRODUCT_DELETE(string id);
        Task<IEnumerable<PRODUCT>> PRODUCT_BYID(string id);
        Task<IEnumerable<UpdateResult>> PRODUCT_CHANGE_STATUS(PRODUCT input);
    }
}
