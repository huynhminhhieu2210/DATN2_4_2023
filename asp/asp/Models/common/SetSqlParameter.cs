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
            string result = $@"@USER_ID         = N'{input.USER_ID}',
                              @BRANCH_ID        = N'{input.BRANCH_ID}',
                              @ROLE_USER_ID     = N'{input.ROLE_USER_ID}',
                              @USER_CODE        = N'{input.USER_CODE}',
                              @USER_NAME        = N'{input.USER_NAME}',
                              @USER_FULLNAME    = N'{input.USER_FULLNAME}',
                              @USER_EMAIL       = N'{input.USER_EMAIL}',
                              @USER_PHONE       = N'{input.USER_PHONE}',
                              @USER_ADDRESS     = N'{input.USER_ADDRESS}',
                              @USER_STATUS      = N'{input.USER_STATUS}',
                              @CREATE_ID        = N'{input.CREATE_ID}',
                              @CREATE_DATE      = N'{input.CREATE_DATE}',
                              @USER_PASSWORD    = N'{input.USER_PASSWORD}'";
            return result;
        }
        public string setParamArea(AREA input)
        {
            string result = $@"@AREA_ID     = N'{input.AREA_ID}',
                               @AREA_CODE   = N'{input.AREA_CODE}',
                               @AREA_NAME   = N'{input.AREA_NAME}',
                               @CREATE_ID   = N'{input.CREATE_ID}',
                               @CREATE_DATE = N'{input.CREATE_DATE}'";
            return result;
        }
        public string setParamBranch(BRANCH input)
        {
            string result = $@"@BRANCH_ID   = N'{input.BRANCH_ID}',
                               @AREA_ID     = N'{input.AREA_ID}',
                               @BRANCH_CODE = N'{input.BRANCH_CODE}',
                               @BRANCH_NAME = N'{input.BRANCH_NAME}',
                               @CREATE_ID   = N'{input.CREATE_ID}',
                               @CREATE_DATE = N'{input.CREATE_DATE}'";
            return result;
        }
        public string setParamDocImpProduct(DOC_IMP_PRODUCT input)
        {
            string result = $@"@DOC_IMP_PRODUCT_ID   = N'{input.DOC_IMP_PRODUCT_ID}',
                               @DOC_IMP_PRODUCT_CODE = N'{input.DOC_IMP_PRODUCT_CODE}', 
                               @BRANCH_ID            = N'{input.BRANCH_ID}',
                               @DELIVER              = N'{input.DELIVER}',
                               @RECEIVER             = N'{input.RECEIVER}',
                               @TOTAL                = N'{input.TOTAL}',
                               @STATUS               = N'{input.STATUS}',
                               @CREATE_ID            = N'{input.CREATE_ID}',
                               @CREATE_DATE          = N'{input.CREATE_DATE}'";
            return result;
        }
        public string setParamDocImpProductDetail(DOC_IMP_PRODUCT_DT input)
        {
            string result = $@"@DOC_IMP_PRODUCT_DT_ID = N'{input.DOC_IMP_PRODUCT_DT_ID}',
                               @PRODUCT_ID            = N'{input.PRODUCT_ID}',
                               @PRICE                 = N'{input.PRICE}',
                               @STATUS                = N'{input.STATUS}',
                               @DOC_IMP_PRODUCT_ID    = N'{input.DOC_IMP_PRODUCT_ID}'";
            return result;
        }
        public string setParamInvoice(INVOICE input)
        {
            string result = $@"@INVOICE_ID       = N'{input.INVOICE_ID}',
                               @INVOICE_CODE     = N'{input.INVOICE_CODE}',
                               @USER_ID          = N'{input.USER_ID}',
                               @RECEIVER         = N'{input.RECEIVER}',
                               @RECEIVER_ADDRESS = N'{input.RECEIVER_ADDRESS}',
                               @RECEIVER_PHONE   = N'{input.RECEIVER_PHONE}',
                               @TOTAL            = N'{input.TOTAL}',
                               @STATUS           = N'{input.STATUS}',
                               @MONEY_PAYED      = N'{input.MONEY_PAYED}',
                               @CREATE_ID        = N'{input.CREATE_ID}',
                               @CREATE_DATE      = N'{input.CREATE_DATE}'";
            return result;
        }
        public string setParamInvoiceDetail(INVOICE_DT input)
        {
            string result = $@"@INVOICE_DT_ID    = N'{input.INVOICE_DT_ID}',
                               @INVOICE_ID       = N'{input.INVOICE_ID}',
                               @PRODUCT_ID       = N'{input.PRODUCT_ID}',
                               @QUANTITY         = N'{input.QUANTITY}',
                               @PRICE            = N'{input.PRICE}'";
            return result;
        }
        public string setParamLog(LOG input)
        {
            string result = $@"@LOG_ID      = N'{input.LOG_ID}',
                               @REF_ID      = N'{input.REF_ID}',
                               @LOG_DATE    = N'{input.LOG_DATE}',
                               @LOG_STEP    = N'{input.LOG_STEP}',
                               @LOG_DESC    = N'{input.LOG_DESC}',
                               @CREATE_ID   = N'{input.CREATE_ID}',
                               @CREATE_DATE = N'{input.CREATE_DATE}'";
            return result;
        }
        public string setParamLogin(LOGIN input)
        {
            string result = $@"@USER_NAME = N'{input.USER_NAME}',
                               @PASSWORD  = N'{input.PASSWORD}'";
            return result;
        }
        public string setParamProduct(PRODUCT input)
        {
            string result = $@"@PRODUCT_ID      = N'{input.PRODUCT_ID}',
                               @PRODUCT_TYPE_ID = N'{input.PRODUCT_TYPE_ID}',
                               @SUPPLIER_ID     = N'{input.SUPPLIER_ID}',
                               @PRODUCT_CODE    = N'{input.PRODUCT_CODE}',
                               @PRODUCT_NAME    = N'{input.PRODUCT_NAME}',
                               @DESCRIPTION     = N'{input.DESCRIPTION}',
                               @NOTE            = N'{input.NOTE}',
                               @CREATE_ID       = N'{input.CREATE_ID}',
                               @CREATE_DATE     = N'{input.CREATE_DATE}',
                               @IMG_URL         = N'{input.IMG_URL}',
                               @PRICE           = N'{input.PRICE}',
                               @CPU             = N'{input.CPU}',
                               @RAM             = N'{input.RAM}',
                               @DISK            = N'{input.DISK}',
                               @VGA             = N'{input.VGA}',
                               @MONITOR         = N'{input.MONITOR}',
                               @PORT            = N'{input.PORT}',
                               @OS              = N'{input.OS}',
                               @WEIGHT          = N'{input.WEIGHT}',
                               @SIZE            = N'{input.SIZE}',
                               @COLOR           = N'{input.COLOR}',
                               @BATTERY         = N'{input.BATTERY}',
                               @LED_KEYBOARD    = N'{input.LED_KEYBOARD}',
                               @BLUETOOTH       = N'{input.BLUETOOTH}',
                               @WEBCAM          = N'{input.WEBCAM}'";
            return result;
        }
        public string setParamProductType(PRODUCT_TYPE input)
        {
            string result = $@"@PRODUCT_TYPE_ID   = N'{input.PRODUCT_TYPE_ID}',
                               @PRODUCT_TYPE_CODE = N'{input.PRODUCT_TYPE_CODE}',
                               @PRODUCT_TYPE_NAME = N'{input.PRODUCT_TYPE_NAME}',
                               @CREATE_ID         = N'{input.CREATE_ID}',
                               @CREATE_DATE       = N'{input.CREATE_DATE}'";
            return result;
        }
        public string setParamRoleUser(ROLE_USER input)
        {
            string result = $@"@ROLE_USER_ID   = N'{input.ROLE_USER_ID}',
                               @ROLE_USER_CODE = N'{input.ROLE_USER_CODE}',
                               @ROLE_USER_NAME = N'{input.ROLE_USER_NAME}',
                               @CREATE_ID      = N'{input.CREATE_ID}',
                               @CREATE_DATE    = N'{input.CREATE_DATE}'";
            return result;
        }
        public string setParamSupplier(SUPPLIER input)
        {
            string result = $@"@SUPPLIER_ID      = N'{input.SUPPLIER_ID}',
                               @SUPPLIER_CODE    = N'{input.SUPPLIER_CODE}',
                               @SUPPLIER_NAME    = N'{input.SUPPLIER_NAME}',
                               @SUPPLIER_PHONE   = N'{input.SUPPLIER_PHONE}',
                               @SUPPLIER_ADDRESS = N'{input.SUPPLIER_ADDRESS}',
                               @CREATE_ID        = N'{input.CREATE_ID}',
                               @CREATE_DATE      = N'{input.CREATE_DATE}'";
            return result;
        }
        public string setParamWarehouse(WAREHOUSE input)
        {
            string result = $@"@WAREHOUSE_ID      = N'{input.WAREHOUSE_ID}',
                               @BRANCH_ID         = N'{input.BRANCH_ID}',
                               @AREA_ID           = N'{input.AREA_ID}',
                               @WAREHOUSE_CODE    = N'{input.WAREHOUSE_CODE}',
                               @WAREHOUSE_NAME    = N'{input.WAREHOUSE_NAME}',
                               @WAREHOUSE_ADDRESS = N'{input.WAREHOUSE_ADDRESS}',
                               @CREATE_ID         = N'{input.CREATE_ID}',
                               @CREATE_DATE       = N'{input.CREATE_DATE}'";
            return result;
        }
    }
}
