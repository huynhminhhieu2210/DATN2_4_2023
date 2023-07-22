using asp.Data;
using asp.IService;
using asp.Models;
using asp.Models.common;
using Dapper;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace asp.Service
{
    public class UploadFilesService : IUploadFilesService
    {
        private readonly aspContext _context;
        static readonly SetSqlParameter _setSqlParameter = new SetSqlParameter();
        private readonly RandomNumberGenerator _rng;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public UploadFilesService(aspContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }
        public async Task<IEnumerable<UpdateResult>> UPLOAD(UPLOADFILE input)
        {
            var filenameupload = "";
            if (input.FILE != null)
            {
                filenameupload = input.REF_ID.ToString() + Path.GetExtension(input.FILE.FileName);
                var uploadPath = Path.Combine(_webHostEnvironment.WebRootPath, "img", "product");
                var filePath = Path.Combine(uploadPath, filenameupload);
                using (FileStream fs = System.IO.File.Create(filePath))
                {
                    input.FILE.CopyTo(fs);
                    fs.Flush();
                }
            }
            var store = "EXEC UPLOAD_FILE @REF_ID = '" + input.REF_ID + "' ,@FILE_NAME = '" + filenameupload + "'";  
            return await _context.UpdateResult.FromSqlRaw(store).ToListAsync();
        }
    }
}
