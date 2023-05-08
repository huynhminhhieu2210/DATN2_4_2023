using asp.Data;
using asp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace asp.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly aspContext _context;
        public AuthController(aspContext context)
        {
            _context = context;
        }
        [HttpPost, Route("Login")]
        public IActionResult Login([FromBody] LOGIN user)
        {
            if(user == null)
            {
                return BadRequest("Invalid client request");
            }
            var store = "EXEC LOGIN_WEB @USER_NAME = '" + user.USER_NAME + "', @TYPE = '" + user.TYPE + "'";
            var checkuser =  _context.USER.FromSqlRaw(store).ToListAsync();

            if(checkuser != null && BCrypt.Net.BCrypt.Verify(user.PASSWORD, checkuser.Result[0].USER_PASSWORD))
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOptions = new JwtSecurityToken(
                    issuer: "https://localhost:5001",
                    audience: "https://localhost:5001",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: signingCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(new { Token = tokenString });
            }
            return Unauthorized();
        }
    }
}
