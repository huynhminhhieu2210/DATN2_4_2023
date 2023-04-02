import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { AREA } from "../models/AREA";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class AreaService {
    private heroes: AREA[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:44377/api/Areas/';

    Area_search(filter :AREA): Observable<Object>{
        return this.http.post(this.url + "AREA_SEARCH", filter);
    }
    Area_insert(filter :AREA): Observable<Object>{
        return this.http.post(this.url + "AREA_INSERT", filter);
    }
    Area_update(filter :AREA): Observable<Object>{
        return this.http.post(this.url + "AREA_UPDATE", filter);
    }
    Area_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "AREA_DELETE", id);
    }
}