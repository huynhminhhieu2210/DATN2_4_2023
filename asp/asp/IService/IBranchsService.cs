using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IBranchsService : IApplicationService
    {
        Task<IEnumerable<BRANCH>> BRANCH_SEARCH(BRANCH input);
        Task<InsertResult> BRANCH_INSERT(BRANCH input);
        Task<UpdateResult> BRANCH_UPDATE(BRANCH input);
        Task<DeleteResult> BRANCH_DELETE(string id);
    }
}
