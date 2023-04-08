import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WAREHOUSE } from '../models/WAREHOUSE';
@Injectable({
    providedIn: 'root',
  })
export class WarehouseService {
    private heroes: WAREHOUSE[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Warehouses/';
 
    Warehouse_search(filter :WAREHOUSE): Observable<Object>{
        return this.http.post(this.url + "WAREHOUSE_SEARCH", filter);
    }
    Warehouse_insert(filter :WAREHOUSE): Observable<Object>{
        return this.http.post(this.url + "WAREHOUSE_INSERT", filter);
    }
    Warehouse_update(filter :WAREHOUSE): Observable<Object>{
        return this.http.post(this.url + "WAREHOUSE_UPDATE", filter);
    }
    Warehouse_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "WAREHOUSE_DELETE", id);
    }
}