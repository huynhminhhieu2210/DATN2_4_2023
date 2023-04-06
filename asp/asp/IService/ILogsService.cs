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
        Task<IEnumerable<InsertResult>> LOG_INSERT(LOG input);
        Task<IEnumerable<UpdateResult>> LOG_UPDATE(LOG input);
        Task<IEnumerable<DeleteResult>> LOG_DELETE(string id);
        Task<IEnumerable<LOG>> LOG_BYID(string id);
    }
}
