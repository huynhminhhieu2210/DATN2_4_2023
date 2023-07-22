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

    Invoice_search(input :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_SEARCH", input);
    }
    Invoice_insert(input :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_INSERT", input);
    }
    Invoice_update(input :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_UPDATE", input);
    }
    Invoice_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "INVOICE_DELETE/" + id);
    }
    Invoice_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "INVOICE_BYID/"+ id);
    }
    Invoice_change_status(input :INVOICE): Observable<Object>{
        return this.http.post(this.url + "INVOICE_CHANGE_STATUS", input);
    }
}