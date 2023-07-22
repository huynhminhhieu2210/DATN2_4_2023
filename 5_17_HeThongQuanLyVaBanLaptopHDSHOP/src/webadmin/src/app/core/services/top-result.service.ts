import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TOP_RESULT } from '../models/TOP_RESULT';
@Injectable({
    providedIn: 'root',
  })
export class TopResultService {
    private heroes: TOP_RESULT[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/TopResults/';

    Top_result_search(filter :TOP_RESULT): Observable<Object>{
        return this.http.post(this.url + "TOP_RESULT_SEARCH", filter);
    }
    Top_result_insert(filter :TOP_RESULT): Observable<Object>{
        return this.http.post(this.url + "TOP_RESULT_INSERT", filter);
    }
    Top_result_update(filter :TOP_RESULT): Observable<Object>{
        return this.http.post(this.url + "TOP_RESULT_UPDATE", filter);
    }
    Top_result_delete(id: string): Observable<Object>{
        return this.http.delete(this.url + "TOP_RESULT_DELETE/" + id);
    }
    Top_result_byid(id: string): Observable<Object>{
        return this.http.get(this.url + "TOP_RESULT_BYID/"+ id);
    }
}