import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCT } from '../models/PRODUCT';
@Injectable({
    providedIn: 'root',
  })
export class ProductService {
    private heroes: PRODUCT[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Products/';

    Product_search(filter :PRODUCT): Observable<Object>{
        return this.http.post(this.url + "PRODUCT_SEARCH", filter);
    }
    Product_insert(filter :PRODUCT): Observable<Object>{
        return this.http.post(this.url + "PRODUCT_INSERT", filter);
    }
    Product_update(filter :PRODUCT): Observable<Object>{
        return this.http.post(this.url + "PRODUCT_UPDATE", filter);
    }
    Product_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "PRODUCT_DELETE/" + id);
    }
    Product_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "PRODUCT_BYID/"+ id);
    }
    Product_change_status(filter :PRODUCT): Observable<Object>{
        return this.http.post(this.url + "PRODUCT_CHANGE_STATUS", filter);
    }
}