using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface ISuppliersService : IApplicationService
    {
        Task<IEnumerable<SUPPLIER>> SUPPLIER_SEARCH(SUPPLIER input);
        Task<IEnumerable<InsertResult>> SUPPLIER_INSERT(SUPPLIER input);
        Task<IEnumerable<UpdateResult>> SUPPLIER_UPDATE(SUPPLIER input);
        Task<IEnumerable<DeleteResult>> SUPPLIER_DELETE(string id);
    }
}
