import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { AREA } from "../models/AREA";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STATUS } from '../models/STATUS';
@Injectable({
    providedIn: 'root',
  })
export class StatusService {
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Statuss/';

    Status_search(filter :STATUS): Observable<Object>{
        return this.http.post(this.url + "STATUS_SEARCH", filter);
    }
}