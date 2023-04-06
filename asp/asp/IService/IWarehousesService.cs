using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IWarehousesService : IApplicationService
    {
        Task<IEnumerable<WAREHOUSE>> WAREHOUSE_SEARCH(WAREHOUSE input);
        Task<IEnumerable<InsertResult>> WAREHOUSE_INSERT(WAREHOUSE input);
        Task<IEnumerable<UpdateResult>> WAREHOUSE_UPDATE(WAREHOUSE input);
        Task<IEnumerable<DeleteResult>> WAREHOUSE_DELETE(string id);
        Task<IEnumerable<WAREHOUSE>> WAREHOUSE_BYID(string id);
    }
}
