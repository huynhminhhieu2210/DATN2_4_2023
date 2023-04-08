import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCT_TYPE } from '../models/PRODUCT_TYPE';
@Injectable({
    providedIn: 'root',
  })
export class ProductTypeService {
    private heroes: PRODUCT_TYPE[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/ProductTypes/';

    Product_Type_search(filter :PRODUCT_TYPE): Observable<Object>{
        return this.http.post(this.url + "PRODUCT_TYPE_SEARCH", filter);
    }
    Product_Type_insert(filter :PRODUCT_TYPE): Observable<Object>{
        return this.http.post(this.url + "PRODUCT_TYPE_INSERT", filter);
    }
    Product_Type_update(filter :PRODUCT_TYPE): Observable<Object>{
        return this.http.post(this.url + "PRODUCT_TYPE_UPDATE", filter);
    }
    Product_Type_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "PRODUCT_TYPE_DELETE/" + id);
    }
    Product_Type_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "PRODUCT_TYPE_BYID/"+ id);
    }
}