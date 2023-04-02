import * as moment from 'moment';
export class INVOICE {
  INVOICE_ID: string | undefined;
  INVOICE_CODE: string | undefined;
  CUSTOMER_ID: string | undefined;
  RECEIVER: string | undefined;
  RECEIVER_ADDRESS: string | undefined;
  RECEIVER_PHONE: string | undefined;
  TOTAL: number | undefined;
  STATUS: string | undefined;
  MONEY_PAYED: number | undefined;
  CREATE_ID: string | undefined;
  CREATE_DATE: moment.Moment | undefined;
}
