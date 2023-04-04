using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IUsersService: IApplicationService
    {
        Task<IEnumerable<USER>> USER_SEARCH(USER input);
        Task<IEnumerable<InsertResult>> USER_INSERT(USER input);
        Task<IEnumerable<UpdateResult>> USER_UPDATE(USER input);
        Task<IEnumerable<DeleteResult>> USER_DELETE(string id);
    }
}
