import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { USER } from "../models/USER";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class CustomerService {
    private heroes: USER[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Users/';

    Customer_search(filter :USER): Observable<Object>{
        return this.http.post(this.url + "USER_SEARCH", filter);
    }
    Customer_insert(filter :USER): Observable<Object>{
        return this.http.post(this.url + "USER_INSERT", filter);
    }
    Customer_update(filter :USER): Observable<Object>{
        return this.http.post(this.url + "USER_UPDATE", filter);
    }
    Customer_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "USER_DELETE/" + id);
    }
    Customer_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "USER_BYID/"+ id);
    }
}