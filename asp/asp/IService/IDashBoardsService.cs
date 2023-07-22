using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IDashBoardsService : IApplicationService
    {
        Task<IEnumerable<BARCHART>> CHART_BAR_LOAD(CHART_BAR_FILTER input);
        Task<IEnumerable<BARCHART>> CHART_BAR2_LOAD(CHART_BAR_FILTER input);
    }
}
