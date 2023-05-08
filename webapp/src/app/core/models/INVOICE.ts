import { INVOICE_DT } from 'src/app/core/models/INVOICE_DT';
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
  notes: string | undefined;
  moneY_PAYED: number | undefined;
  creatE_ID: string | undefined;
  creatE_DATE: moment.Moment | undefined;
  LST_INVOICE_DT: INVOICE_DT[];
  invoicE_STATUS_NAME: string | undefined;
  methoD_PAY: string | undefined;
}
