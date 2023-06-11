using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IDocImpProductsService : IApplicationService
    {
        Task<IEnumerable<DOC_IMP_PRODUCT>> DOC_IMP_PRODUCT_SEARCH(DOC_IMP_PRODUCT input);
        Task<IEnumerable<InsertResult>> DOC_IMP_PRODUCT_INSERT(DOC_IMP_PRODUCT input);
        Task<IEnumerable<UpdateResult>> DOC_IMP_PRODUCT_UPDATE(DOC_IMP_PRODUCT input);
        Task<IEnumerable<DeleteResult>> DOC_IMP_PRODUCT_DELETE(string id);
        Task<IEnumerable<DOC_IMP_PRODUCT>> DOC_IMP_PRODUCT_BYID(string id);
        Task<IEnumerable<UpdateResult>> DOC_IMP_PRODUCT_ACCESS(Approve input);
    }
}
