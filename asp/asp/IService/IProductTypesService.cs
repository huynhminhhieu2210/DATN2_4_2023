﻿using Abp.Application.Services;
using asp.Models;
using asp.Models.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.IService
{
    public interface IProductTypesService : IApplicationService
    {
        Task<IEnumerable<PRODUCT_TYPE>> PRODUCT_TYPE_SEARCH(PRODUCT_TYPE input);
        Task<InsertResult> PRODUCT_TYPE_INSERT(PRODUCT_TYPE input);
        Task<UpdateResult> PRODUCT_TYPE_UPDATE(PRODUCT_TYPE input);
        Task<DeleteResult> PRODUCT_TYPE_DELETE(string id);
    }
}