import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER } from '../models/USER';
@Injectable({
    providedIn: 'root',
  })
export class UserService {
    private heroes: USER[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:44377/api/Users/';

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
        return this.http.post(this.url + "USER_DELETE", id);
    }
}