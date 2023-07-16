import * as moment from 'moment';
export class INVOICE {
  invoicE_ID: string | undefined;
  invoicE_CODE: string | undefined;
  useR_ID: string | undefined;
  receiver: string | undefined;
  receiveR_ADDRESS: string | undefined;
  receiveR_PHONE: string | undefined;
  total: number | undefined;
  status: string | undefined;
  creatE_ID: string | undefined;
  creatE_DATE: moment.Moment | undefined;
  invoicE_STATUS_NAME: string | undefined;
  creatE_NAME: string | undefined;
  useR_NAME: string | undefined;
  top: number | undefined;
}
