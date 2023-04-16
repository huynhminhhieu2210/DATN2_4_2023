using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IRoleUsersService : IApplicationService
    {
        Task<IEnumerable<ROLE_USER>> ROLE_USER_SEARCH(ROLE_USER input);
        Task<IEnumerable<InsertResult>> ROLE_USER_INSERT(ROLE_USER input);
        Task<IEnumerable<UpdateResult>> ROLE_USER_UPDATE(ROLE_USER input);
        Task<IEnumerable<DeleteResult>> ROLE_USER_DELETE(string id);
        Task<IEnumerable<ROLE_USER>> ROLE_USER_BYID(string id);
    }
}
