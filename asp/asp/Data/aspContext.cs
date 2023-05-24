using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using asp;
using asp.Models;
using asp.Models.common;

namespace asp.Data
{
    public class aspContext : DbContext
    {
        public aspContext (DbContextOptions<aspContext> options)
            : base(options)
        {
        }
        public DbSet<USER> USER { get; set; }
        public DbSet<AREA> AREA { get; set; }
        public DbSet<BRANCH> BRANCH { get; set; }
        public DbSet<DOC_IMP_PRODUCT> DOC_IMP_PRODUCT { get; set; }
        public DbSet<DOC_IMP_PRODUCT_DT> DOC_IMP_PRODUCT_DT { get; set; }
        public DbSet<INVOICE> INVOICE { get; set; }
        public DbSet<INVOICE_DT> INVOICE_DT { get; set; }
        public DbSet<LOG> LOG { get; set; }
        public DbSet<PRODUCT> PRODUCT { get; set; }
        public DbSet<PRODUCT_TYPE> PRODUCT_TYPE { get; set; }
        public DbSet<ROLE_USER> ROLE_USER { get; set; }
        public DbSet<SUPPLIER> SUPPLIER { get; set; }
        public DbSet<WAREHOUSE> WAREHOUSE { get; set; }
        public DbSet<LOGIN> LOGIN { get; set; }
        public DbSet<InsertResult> InsertResult { get; set; }
        public DbSet<UpdateResult> UpdateResult { get; set; }
        public DbSet<DeleteResult> DeleteResult { get; set; }
        public DbSet<ADDRESS_RECEIVE> ADDRESS_RECEIVE { get; set; }
        public DbSet<STATUS> STATUS { get; set; }
        public DbSet<BARCHART> BARCHART { get; set; }
    }
}
