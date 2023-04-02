import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { CUSTOMER } from "../models/CUSTOMER";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class CustomerService {
    private heroes: CUSTOMER[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:44377/api/Customers/';

    Customer_search(filter :CUSTOMER): Observable<Object>{
        return this.http.post(this.url + "CUSTOMER_SEARCH", filter);
    }
    Customer_insert(filter :CUSTOMER): Observable<Object>{
        return this.http.post(this.url + "CUSTOMER_INSERT", filter);
    }
    Customer_update(filter :CUSTOMER): Observable<Object>{
        return this.http.post(this.url + "CUSTOMER_UPDATE", filter);
    }
    Customer_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "CUSTOMER_DELETE", id);
    }
}