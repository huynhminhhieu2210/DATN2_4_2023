using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IAreasService : IApplicationService
    {
        Task<IEnumerable<AREA>> AREA_SEARCH(AREA input);
        Task<IEnumerable<InsertResult>> AREA_INSERT(AREA input);
        Task<IEnumerable<UpdateResult>> AREA_UPDATE(AREA input);
        Task<IEnumerable<DeleteResult>> AREA_DELETE(string id);
        Task<IEnumerable<AREA>> AREA_BYID(string id);
    }
}
