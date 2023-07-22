import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INVOICE } from '../models/INVOICE';
@Injectable({
    providedIn: 'root',
  })
export class InvoiceService {
    private heroes: INVOICE[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Invoices/';

    Invoice_search(filter :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_SEARCH", filter);
    }
    Invoice_insert(filter :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_INSERT", filter);
    }
    Invoice_update(filter :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_UPDATE", filter);
    }
    Invoice_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "INVOICE_DELETE/" + id);
    }
    Invoice_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "INVOICE_BYID/"+ id);
    }
    Invoice_cancel(filter :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_CANCEL", filter);
    }
    Invoice_access(filter :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_ACCESS", filter);
    }
}