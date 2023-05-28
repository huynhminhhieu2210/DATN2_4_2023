import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DOC_IMP_PRODUCT_DT } from '../models/DOC_IMP_PRODUCT_DT';
@Injectable({
    providedIn: 'root',
  })
export class DocImpProductDetailsService {
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/DOC_IMP_PRODUCT_DELETE/';

    Doc_Imp_Product_Dt_search(filter :DOC_IMP_PRODUCT_DT): Observable<Object>{
        return this.http.post(this.url + "DOC_IMP_PRODUCT_DT_SEARCH", filter);
    }
    Doc_Imp_Product_Dt_insert(filter :DOC_IMP_PRODUCT_DT): Observable<Object>{
        return this.http.post(this.url + "DOC_IMP_PRODUCT_DT_INSERT", filter);
    }
    Doc_Imp_Product_Dt_update(filter :DOC_IMP_PRODUCT_DT): Observable<Object>{
        return this.http.post(this.url + "DOC_IMP_PRODUCT_DT_UPDATE", filter);
    }
    Doc_Imp_Product_Dt_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "DOC_IMP_PRODUCT_DT_DELETE", id);
    }
}