import * as moment from 'moment';
export class User {
  PRODUCT_ID: string | undefined;
  PRODUCT_TYPE_ID: string | undefined;
  SUPPLIER_ID: string | undefined;
  PRODUCT_CODE: string | undefined;
  PRODUCT_NAME: string | undefined;
  DESCRIPTION: string | undefined;
  NOTE: string | undefined;
  CREATE_ID: string | undefined;
  CREATE_DATE: moment.Moment | undefined;
}
