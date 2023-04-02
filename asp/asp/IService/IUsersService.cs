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
        Task<InsertResult> USER_INSERT(USER input);
        Task<UpdateResult> USER_UPDATE(USER input);
        Task<DeleteResult> USER_DELETE(string id);
    }
}
