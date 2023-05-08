import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER } from '../models/USER';
import { ADDRESS_RECEIVE } from '../models/ADDRESS_RECEIVE';
@Injectable({
    providedIn: 'root',
  })
export class UserService {
    private heroes: USER[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Users/';

    User_search(input :USER): Observable<Object>{
        return this.http.post(this.url + "USER_SEARCH", input);
    }
    User_insert(input :USER): Observable<Object>{
        return this.http.post(this.url + "USER_INSERT", input);
    }
    User_update(input :USER): Observable<Object>{
        return this.http.post(this.url + "USER_UPDATE", input);
    }
    User_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "USER_DELETE/" + id);
    }
    User_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "USER_BYID/"+ id);
    }
    User_changepass(passOld: string, passNew: string): Observable<Object>{
        return this.http.post(this.url + "USER_CHANGEPASS" ,{passOld, passNew});
    }
    User_update_info(input :USER): Observable<Object>{
        return this.http.post(this.url + "USER_UPDATE_INFO", input);
    }
    User_load_address_receive(userlogin: string): Observable<Object>{
        return this.http.get(this.url + "USER_LOAD_ADDRESS_RECEIVE/"+ userlogin);
    }
    User_update_address_receive(input :ADDRESS_RECEIVE): Observable<Object>{
        return this.http.post(this.url + "USER_UPDATE_ADDRESS_RECEIVE", input);
    }
    User_delete_address_receive(id: string): Observable<Object>{
        return this.http.delete(this.url + "USER_DELETE_ADDRESS_RECEIVE/" + id);
    }
    User_insert_address_receive(input :ADDRESS_RECEIVE): Observable<Object>{
        return this.http.post(this.url + "USER_INSERT_ADDRESS_RECEIVE", input);
    }
}