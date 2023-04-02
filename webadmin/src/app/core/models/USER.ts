import * as moment from 'moment';
export class User {
  USER_ID: string | undefined;
  BRANCH_ID: string | undefined;
  ROLE_USER_ID: string | undefined;
  USER_CODE: string | undefined;
  USER_NAME: string | undefined;
  USER_FULLNAME: string | undefined;
  EMAIL: string | undefined;
  PHONE: string | undefined;
  ADDRESS: string | undefined;
  STATUS: string | undefined;
  CREATE_ID: string | undefined;
  CREATE_DATE: moment.Moment | undefined;
}
