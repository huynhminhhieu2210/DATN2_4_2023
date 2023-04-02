import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { BRANCH } from "../models/BRANCH";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class BranchService {
    private heroes: BRANCH[] = [];
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:44377/api/Branchs/';

    Branch_search(filter :BRANCH): Observable<Object>{
        return this.http.post(this.url + "BRANCH_SEARCH", filter);
    }
    Branch_insert(filter :BRANCH): Observable<Object>{
        return this.http.post(this.url + "BRANCH_INSERT", filter);
    }
    Branch_update(filter :BRANCH): Observable<Object>{
        return this.http.post(this.url + "BRANCH_UPDATE", filter);
    }
    Branch_delete(id: string): Observable<Object>{
        return this.http.post(this.url + "BRANCH_DELETE", id);
    }
}