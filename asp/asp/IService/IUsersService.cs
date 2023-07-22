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
        Task<IEnumerable<InsertResult>> USER_INSERT(USER input);
        Task<IEnumerable<UpdateResult>> USER_UPDATE(USER input);
        Task<IEnumerable<DeleteResult>> USER_DELETE(string id);
        Task<IEnumerable<USER>> USER_BYID(string id);
        Task<IEnumerable<USER>> USER_GET_INFO_LOGIN(LOGIN user);
        Task<IEnumerable<UpdateResult>> USER_UPDATE_INFO(USER input);
        Task<IEnumerable<ADDRESS_RECEIVE>> USER_LOAD_ADDRESS_RECEIVE(string userlogin);
        Task<IEnumerable<UpdateResult>> USER_UPDATE_ADDRESS_RECEIVE(ADDRESS_RECEIVE input);
        Task<IEnumerable<DeleteResult>> USER_DELETE_ADDRESS_RECEIVE(string id);
        Task<IEnumerable<InsertResult>> USER_INSERT_ADDRESS_RECEIVE(ADDRESS_RECEIVE input);
        Task<IEnumerable<UpdateResult>> USER_CHANGE_PASSWORD(INPUTCHANGEPASS input);
        Task<IEnumerable<InsertResult>> USER_REGISTER(REGISTER input);
    }
}
