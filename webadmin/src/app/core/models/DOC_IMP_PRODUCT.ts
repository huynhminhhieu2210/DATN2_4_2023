import * as moment from 'moment';
import { DOC_IMP_PRODUCT_DT } from './DOC_IMP_PRODUCT_DT';
export class DOC_IMP_PRODUCT {
  doC_IMP_PRODUCT_ID: string | undefined;
  doC_IMP_PRODUCT_CODE: string | undefined;
  brancH_ID: string | undefined;
  deliver: string | undefined;
  receiver: string | undefined;
  receiveR_NAME: string | undefined;
  total: number | undefined;
  status: string | undefined;
  creatE_ID: string | undefined;
  creatE_DATE: moment.Moment | undefined;
  lsT_DOC_IMP_PRODUCT_DT: DOC_IMP_PRODUCT_DT[] | undefined;
  warehousE_ID: string | undefined;
}
