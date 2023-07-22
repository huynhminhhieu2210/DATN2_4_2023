using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IInvoicesService : IApplicationService
    {
        Task<IEnumerable<INVOICE>> INVOICE_SEARCH(INVOICE input);
        Task<IEnumerable<InsertResult>> INVOICE_INSERT(INVOICE input);
        Task<IEnumerable<UpdateResult>> INVOICE_UPDATE(INVOICE input);
        Task<IEnumerable<DeleteResult>> INVOICE_DELETE(string id);
        Task<IEnumerable<INVOICE>> INVOICE_BYID(string id);
        Task<IEnumerable<UpdateResult>> INVOICE_CHANGE_STATUS(INVOICE input);
        Task<IEnumerable<UpdateResult>> INVOICE_CANCEL (INVOICE input);
        Task<IEnumerable<UpdateResult>> INVOICE_ACCESS(INVOICE input);
    }
}
