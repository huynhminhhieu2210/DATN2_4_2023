using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp.Models.common
{
    public class SetSqlParameter
    {
        public string setParamUser(USER input)
        {
            string result = $@"@USER_ID         = '{input.USER_ID}',
                              @BRANCH_ID        = '{input.BRANCH_ID}',
                              @ROLE_USER_ID     = '{input.ROLE_USER_ID}',
                              @USER_CODE        = '{input.USER_CODE}',
                              @USER_NAME        = '{input.USER_NAME}',
                              @USER_FULLNAME    = '{input.USER_FULLNAME}',
                              @EMAIL            = '{input.EMAIL}',
                              @PHONE            = '{input.PHONE}',
                              @ADDRESS          = '{input.ADDRESS}',
                              @STATUS           = '{input.STATUS}',
                              @CREATE_ID        = '{input.CREATE_ID}',
                              @CREATE_DATE      = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamArea(AREA input)
        {
            string result = $@"@AREA_ID     = '{input.AREA_ID}',
                               @AREA_CODE   = '{input.AREA_CODE}',
                               @AREA_NAME   = '{input.AREA_NAME}',
                               @CREATE_ID   = '{input.CREATE_ID}',
                               @CREATE_DATE = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamBranch(BRANCH input)
        {
            string result = $@"@BRANCH_ID   = '{input.BRANCH_ID}',
                               @AREA_ID     = '{input.AREA_ID}',
                               @BRANCH_CODE = '{input.BRANCH_CODE}',
                               @BRANCH_NAME = '{input.BRANCH_NAME}',
                               @CREATE_ID   = '{input.CREATE_ID}',
                               @CREATE_DATE = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamColor(COLOR input)
        {
            string result = $@"@COLOR_ID    = '{input.COLOR_ID}',
                               @COLOR_CODE  = '{input.COLOR_CODE}',
                               @COLOR_NAME  = '{input.COLOR_NAME}',
                               @CREATE_ID   = '{input.CREATE_ID}',
                               @CREATE_DATE = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamCustomer(CUSTOMER input)
        {
            string result = $@"@CUSTOMER_ID       = '{input.CUSTOMER_ID}',
                               @CUSTOMER_CODE     = '{input.CUSTOMER_CODE}',
                               @CUSTOMER_NAME     = '{input.CUSTOMER_NAME}',
                               @CUSTOMER_FULLNAME = '{input.CUSTOMER_FULLNAME}',
                               @EMAIL             = '{input.EMAIL}',
                               @PHONE             = '{input.PHONE}',
                               @ADDRESS           = '{input.ADDRESS}',
                               @STATUS            = '{input.STATUS}',
                               @CREATE_ID         = '{input.CREATE_ID}',
                               @CREATE_DATE       = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamDocImpProduct(DOC_IMP_PRODUCT input)
        {
            string result = $@"@DOC_IMP_PRODUCT_ID   = '{input.DOC_IMP_PRODUCT_ID}',
                               @DOC_IMP_PRODUCT_CODE = '{input.DOC_IMP_PRODUCT_CODE}', 
                               @BRANCH_ID            = '{input.BRANCH_ID}',
                               @DELIVER              = '{input.DELIVER}',
                               @RECEIVER             = '{input.RECEIVER}',
                               @TOTAL                = '{input.TOTAL}',
                               @STATUS               = '{input.STATUS}',
                               @CREATE_ID            = '{input.CREATE_ID}',
                               @CREATE_DATE          = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamDocImpProductDetail(DOC_IMP_PRODUCT_DT input)
        {
            string result = $@"@DOC_IMP_PRODUCT_DT_ID = '{input.DOC_IMP_PRODUCT_DT_ID}',
                               @PRODUCT_ID            = '{input.PRODUCT_ID}',
                               @PRICE                 = '{input.PRICE}',
                               @STATUS                = '{input.STATUS}',
                               @DOC_IMP_PRODUCT_ID    = '{input.DOC_IMP_PRODUCT_ID}'";
            return result;
        }
        public string setParamInvoice(INVOICE input)
        {
            string result = $@"INVOICE_ID       = '{input.INVOICE_ID}',
                               INVOICE_CODE     = '{input.INVOICE_CODE}',
                               CUSTOMER_ID      = '{input.CUSTOMER_ID}',
                               RECEIVER         = '{input.RECEIVER}',
                               RECEIVER_ADDRESS = '{input.RECEIVER_ADDRESS}',
                               RECEIVER_PHONE   = '{input.RECEIVER_PHONE}',
                               TOTAL            = '{input.TOTAL}',
                               STATUS           = '{input.STATUS}',
                               MONEY_PAYED      = '{input.MONEY_PAYED}',
                               CREATE_ID        = '{input.CREATE_ID}',
                               CREATE_DATE      = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamInvoiceDetail(INVOICE_DT input)
        {
            string result = $@"@INVOICE_DT_ID    = '{input.INVOICE_DT_ID}',
                               @INVOICE_ID       = '{input.INVOICE_ID}',
                               @PRODUCT_COLOR_ID = '{input.PRODUCT_COLOR_ID}',
                               @QUANTITY         = '{input.QUANTITY}',
                               @PRICE            = '{input.PRICE}'";
            return result;
        }
        public string setParamLog(LOG input)
        {
            string result = $@"@LOG_ID      = '{input.LOG_ID}',
                               @REF_ID      = '{input.REF_ID}',
                               @LOG_DATE    = '{input.LOG_DATE}',
                               @LOG_STEP    = '{input.LOG_STEP}',
                               @LOG_DESC    = '{input.LOG_DESC}',
                               @CREATE_ID   = '{input.CREATE_ID}',
                               @CREATE_DATE = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamLogin(LOGIN input)
        {
            string result = $@"@USER_NAME = '{input.USER_NAME}',
                               @PASSWORD  = '{input.PASSWORD}'";
            return result;
        }
        public string setParamProduct(PRODUCT input)
        {
            string result = $@"@PRODUCT_ID      = '{input.PRODUCT_ID}',
                               @PRODUCT_TYPE_ID = '{input.PRODUCT_TYPE_ID}',
                               @SUPPLIER_ID     = '{input.SUPPLIER_ID}',
                               @PRODUCT_CODE    = '{input.PRODUCT_CODE}',
                               @PRODUCT_NAME    = '{input.PRODUCT_NAME}',
                               @DESCRIPTION     = '{input.DESCRIPTION}',
                               @NOTE            = '{input.NOTE}',
                               @CREATE_ID       = '{input.CREATE_ID}',
                               @CREATE_DATE     = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamProductColor(PRODUCT_COLOR input)
        {
            string result = $@"@PRODUCT_COLOR_ID = '{input.PRODUCT_COLOR_ID}',
                               @COLOR_ID         = '{input.COLOR_ID}',
                               @PRODUCT_ID       = '{input.PRODUCT_ID}',
                               @WAREHOUSE_ID     = '{input.WAREHOUSE_ID}',
                               @STOCK            = '{input.STOCK}',
                               @PRICE            = '{input.PRICE}',
                               @CREATE_ID        = '{input.CREATE_ID}',
                               @CREATE_DATE      = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamProductType(PRODUCT_TYPE input)
        {
            string result = $@"@PRODUCT_TYPE_ID   = '{input.PRODUCT_TYPE_ID}',
                               @PRODUCT_TYPE_CODE = '{input.PRODUCT_TYPE_CODE}',
                               @PRODUCT_TYPE_NAME = '{input.PRODUCT_TYPE_NAME}',
                               @CREATE_ID         = '{input.CREATE_ID}',
                               @CREATE_DATE       = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamRoleUser(ROLE_USER input)
        {
            string result = $@"@ROLE_USER_ID   = '{input.ROLE_USER_ID}',
                               @ROLE_USER_CODE = '{input.ROLE_USER_CODE}',
                               @ROLE_USER_NAME = '{input.ROLE_USER_NAME}',
                               @CREATE_ID      = '{input.CREATE_ID}',
                               @CREATE_DATE    = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamSupplier(SUPPLIER input)
        {
            string result = $@"@SUPPLIER_ID      = '{input.SUPPLIER_ID}',
                               @SUPPLIER_CODE    = '{input.SUPPLIER_CODE}',
                               @SUPPLIER_NAME    = '{input.SUPPLIER_NAME}',
                               @SUPPLIER_PHONE   = '{input.SUPPLIER_PHONE}',
                               @SUPPLIER_ADDRESS = '{input.SUPPLIER_ADDRESS}',
                               @CREATE_ID        = '{input.CREATE_ID}',
                               @CREATE_DATE      = '{input.CREATE_DATE}'";
            return result;
        }
        public string setParamWarehouse(WAREHOUSE input)
        {
            string result = $@"@WAREHOUSE_ID      = '{input.WAREHOUSE_ID}',
                               @BRANCH_ID         = '{input.BRANCH_ID}',
                               @AREA_ID           = '{input.AREA_ID}',
                               @WAREHOUSE_CODE    = '{input.WAREHOUSE_CODE}',
                               @WAREHOUSE_NAME    = '{input.WAREHOUSE_NAME}',
                               @WAREHOUSE_ADDRESS = '{input.WAREHOUSE_ADDRESS}',
                               @CREATE_ID         = '{input.CREATE_ID}',
                               @CREATE_DATE       = '{input.CREATE_DATE}'";
            return result;
        }
    }
}
