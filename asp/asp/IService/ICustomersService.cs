using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface ICustomersService : IApplicationService
    {
        Task<IEnumerable<CUSTOMER>> CUSTOMER_SEARCH(CUSTOMER input);
        Task<IEnumerable<InsertResult>> CUSTOMER_INSERT(CUSTOMER input);
        Task<IEnumerable<UpdateResult>> CUSTOMER_UPDATE(CUSTOMER input);
        Task<IEnumerable<DeleteResult>> CUSTOMER_DELETE(string id);
    }
}
