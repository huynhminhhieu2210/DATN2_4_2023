import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { DOC_IMP_PRODUCT } from "../models/DOC_IMP_PRODUCT";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class DocImpProductService {
    private heroes: DOC_IMP_PRODUCT[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:44377/api/Doc_Imp_products/';

    Doc_Imp_Product_search(filter :DOC_IMP_PRODUCT): Observable<Object>{
        return this.http.post(this.url + "DOC_IMP_PRODUCT_SEARCH", filter);
    }
    Doc_Imp_Product_insert(filter :DOC_IMP_PRODUCT): Observable<Object>{
        return this.http.post(this.url + "DOC_IMP_PRODUCT_INSERT", filter);
    }
    Doc_Imp_Product_update(filter :DOC_IMP_PRODUCT): Observable<Object>{
        return this.http.post(this.url + "DOC_IMP_PRODUCT_UPDATE", filter);
    }
    Doc_Imp_Product_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "DOC_IMP_PRODUCT_DELETE", id);
    }
}