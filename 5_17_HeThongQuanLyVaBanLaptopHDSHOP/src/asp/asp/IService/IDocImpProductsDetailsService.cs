using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IDocImpProductsDetailsService : IApplicationService
    {
        Task<IEnumerable<DOC_IMP_PRODUCT_DT>> DOC_IMP_PRODUCT_DT_SEARCH(DOC_IMP_PRODUCT_DT input);
        Task<IEnumerable<InsertResult>> DOC_IMP_PRODUCT_DT_INSERT(DOC_IMP_PRODUCT_DT input);
        Task<IEnumerable<UpdateResult>> DOC_IMP_PRODUCT_DT_UPDATE(DOC_IMP_PRODUCT_DT input);
        Task<IEnumerable<DeleteResult>> DOC_IMP_PRODUCT_DT_DELETE(string id);
        Task<IEnumerable<DOC_IMP_PRODUCT_DT>> DOC_IMP_PRODUCT_DT_BYID(string id);
    }
}
