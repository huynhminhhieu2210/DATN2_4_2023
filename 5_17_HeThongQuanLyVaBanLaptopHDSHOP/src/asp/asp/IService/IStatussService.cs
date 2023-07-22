using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IStatussService : IApplicationService
    {
        Task<IEnumerable<STATUS>> STATUS_SEARCH(STATUS input);
    }
}
