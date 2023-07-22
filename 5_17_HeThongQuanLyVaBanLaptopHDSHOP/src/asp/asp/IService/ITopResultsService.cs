using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface ITopResultsService : IApplicationService
    {
        Task<IEnumerable<TOP_RESULT>> TOP_RESULT_SEARCH(TOP_RESULT input);
        Task<IEnumerable<InsertResult>> TOP_RESULT_INSERT(TOP_RESULT input);
        Task<IEnumerable<UpdateResult>> TOP_RESULT_UPDATE(TOP_RESULT input);
        Task<IEnumerable<DeleteResult>> TOP_RESULT_DELETE(string id);
        Task<IEnumerable<TOP_RESULT>> TOP_RESULT_BYID(string id);
    }
}
