import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER } from '../models/USER';
@Injectable({
    providedIn: 'root',
  })
export class UploadFileService {
    constructor(private http:HttpClient  ) { }
    private url: string ='https://localhost:5001/api/UploadFiles/';

    upload(input :any): Observable<Object>{
        return this.http.post(this.url + "UPLOAD", input);
    }
}