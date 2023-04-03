import * as moment from 'moment';
export class INVOICE {
  invoicE_ID: string | undefined;
  custome_CODE: string | undefined;
  receiver_ID: string | undefined;
  receiver: string | undefined;
  receiveR_ADDRESS: string | undefined;
  receiveR_PHONE: string | undefined;
  total: number | undefined;
  status: string | undefined;
  moneY_PAYED: number | undefined;
  creatE_ID: string | undefined;
  creatE_DATE: moment.Moment | undefined;
}
