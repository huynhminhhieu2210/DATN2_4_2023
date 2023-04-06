import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROLE_USER } from '../models/ROLE_USER';
@Injectable({
    providedIn: 'root',
  })
export class RoleUserService {
    private heroes: ROLE_USER[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:44377/api/RoleUsers/';

    Role_User_search(filter :ROLE_USER): Observable<Object>{
        return this.http.post(this.url + "ROLE_USER_SEARCH", filter);
    }
    Role_User_insert(filter :ROLE_USER): Observable<Object>{
        return this.http.post(this.url + "ROLE_USER_INSERT", filter);
    }
    Role_User_update(filter :ROLE_USER): Observable<Object>{
        return this.http.post(this.url + "ROLE_USER_UPDATE", filter);
    }
    Role_User_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "ROLE_USER_DELETE", id);
    }
    Role_User_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "ROLE_USER_BYID/"+ id);
    }
}