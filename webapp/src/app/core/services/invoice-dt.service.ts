import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INVOICE_DT } from '../models/INVOICE_DT';
@Injectable({
    providedIn: 'root',
  })
export class InvoiceDtailsService {
    private heroes: INVOICE_DT[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/InvoiceDetails/';

    Invoice_detail_search(filter :INVOICE_DT): Observable<Object>{
        return this.http.post(this.url + "INVOICE_DT_SEARCH", filter);
    }
    Invoice_detail_insert(filter :INVOICE_DT): Observable<Object>{
        return this.http.post(this.url + "INVOICE_DT_INSERT", filter);
    }
    Invoice_detail_update(filter :INVOICE_DT): Observable<Object>{
        return this.http.post(this.url + "INVOICE_DT_UPDATE", filter);
    }
    Invoice_detail_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "INVOICE_DT_DELETE/" + id);
    }
    Invoice_detail_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "INVOICE_DT_BYID/"+ id);
    }
}