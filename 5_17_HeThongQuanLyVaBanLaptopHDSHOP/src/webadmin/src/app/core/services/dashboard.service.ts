import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CHART_BAR_FILTER } from '../models/CHART_BAR_FILTER';
@Injectable({
    providedIn: 'root',
  })
export class DashboardService {
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/Dashboards/';

    Chart_bar_load(filter :CHART_BAR_FILTER): Observable<Object>{
        return this.http.post(this.url + "CHART_BAR_LOAD", filter);
    }
}