using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IUploadFilesService : IApplicationService
    {
        Task<IEnumerable<UpdateResult>> UPLOAD(UPLOADFILE input);
    }
}
