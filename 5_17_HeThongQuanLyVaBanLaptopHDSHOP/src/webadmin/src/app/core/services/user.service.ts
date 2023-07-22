import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER } from '../models/USER';
import { INPUTCHANGEPASS } from '../models/INPUTCHANGEPASS';
@Injectable({
    providedIn: 'root',
  })
export class UserService {
    private heroes: USER[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Users/';

    User_search(filter :USER): Observable<Object>{
        return this.http.post(this.url + "USER_SEARCH", filter);
    }
    User_insert(filter :USER): Observable<Object>{
        return this.http.post(this.url + "USER_INSERT", filter);
    }
    User_update(filter :USER): Observable<Object>{
        return this.http.post(this.url + "USER_UPDATE", filter);
    }
    User_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "USER_DELETE/" + id);
    }
    User_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "USER_BYID/"+ id);
    }
    User_update_info(input :USER): Observable<Object>{
        return this.http.post(this.url + "USER_UPDATE_INFO", input);
    }
    User_change_pass(filter :INPUTCHANGEPASS): Observable<Object>{
        return this.http.post(this.url + "USER_CHANGE_PASSWORD", filter);
    }
}