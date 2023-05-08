import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INVOICE_DT } from '../models/INVOICE_DT';
import { INVOICE } from '../models/INVOICE';
@Injectable({
    providedIn: 'root',
  })
export class CartService {
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Carts/';

    Cart_load(userlogin :string): Observable<Object>{
        return this.http.get(this.url + "CART_LOAD/" + userlogin);
    }
    Cart_update(input :INVOICE): Observable<Object>{
        return this.http.post(this.url + "CART_UPDATE", input);
    }
    Cart_delete(useR_LOGIN: string,id: string): Observable<Object>{
        return this.http.post(this.url + "CART_DELETE", {id, useR_LOGIN});
    }
    Cart_add_product(useR_LOGIN: string, id: string): Observable<Object>{
        return this.http.post(this.url + "CART_ADD_PRODUCT", {id, useR_LOGIN});
    }
    Cart_checkout(input :INVOICE): Observable<Object>{
        return this.http.post(this.url + "CART_CHECKOUT", input);
    }
}