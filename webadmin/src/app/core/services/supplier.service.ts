import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SUPPLIER } from '../models/SUPPLIER';
@Injectable({
    providedIn: 'root',
  })
export class SupplierService {
    private heroes: SUPPLIER[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:44377/api/Suppliers/';

    Supplier_search(filter :SUPPLIER): Observable<Object>{
        return this.http.post(this.url + "SUPPLIER_SEARCH", filter);
    }
    Supplier_insert(filter :SUPPLIER): Observable<Object>{
        return this.http.post(this.url + "SUPPLIER_INSERT", filter);
    }
    Supplier_update(filter :SUPPLIER): Observable<Object>{
        return this.http.post(this.url + "SUPPLIER_UPDATE", filter);
    }
    Supplier_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "SUPPLIER_DELETE", id);
    }
}