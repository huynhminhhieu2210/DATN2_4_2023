using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IInvoiceDetailsService : IApplicationService
    {
        Task<IEnumerable<INVOICE_DT>> INVOICE_DT_SEARCH(INVOICE_DT input);
        Task<IEnumerable<InsertResult>> INVOICE_DT_INSERT(INVOICE_DT input);
        Task<IEnumerable<UpdateResult>> INVOICE_DT_UPDATE(INVOICE_DT input);
        Task<IEnumerable<DeleteResult>> INVOICE_DT_DELETE(string id);
        Task<IEnumerable<INVOICE_DT>> INVOICE_DT_BYID(string id);
    }
}
