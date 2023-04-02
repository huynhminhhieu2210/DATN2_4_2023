using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface ILogsService : IApplicationService
    {
        Task<IEnumerable<LOG>> LOG_SEARCH(LOG input);
        Task<InsertResult> LOG_INSERT(LOG input);
        Task<UpdateResult> LOG_UPDATE(LOG input);
        Task<DeleteResult> LOG_DELETE(string id);
    }
}
