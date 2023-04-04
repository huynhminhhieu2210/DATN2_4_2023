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
    private url: string ='https://localhost:44377/api/Product_Types/';

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
        return this.http.post(this.url + "PRODUCT_TYPE_DELETE", id);
    }
}