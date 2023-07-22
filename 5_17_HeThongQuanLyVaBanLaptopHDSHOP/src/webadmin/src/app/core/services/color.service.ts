import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { COLOR } from "../models/COLOR";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class ColorService {
    private heroes: COLOR[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Colors/';

    Color_search(filter :COLOR): Observable<Object>{
        return this.http.post(this.url + "COLOR_SEARCH", filter);
    }
    Color_insert(filter :COLOR): Observable<Object>{
        return this.http.post(this.url + "COLOR_INSERT", filter);
    }
    Color_update(filter :COLOR): Observable<Object>{
        return this.http.post(this.url + "COLOR_UPDATE", filter);
    }
    Color_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "COLOR_DELETE", id);
    }
}