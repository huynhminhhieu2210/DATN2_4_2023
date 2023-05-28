import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DOC_IMP_PRODUCT } from '../models/DOC_IMP_PRODUCT';
@Injectable({
    providedIn: 'root',
  })
export class DocImpProductService {
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/DocImpProducts/';

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
    Doc_Imp_Product_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "DOC_IMP_PRODUCT_BYID/"+ id);
    }
}