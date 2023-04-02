import { AREA } from "../models/AREA";
import { HttpClient,HttpClientModule,HttpParams,HttpHeaders } from '@angular/common/http';
export class AreaService {
    private heroes: AREA[] = [];
  
    constructor(private http:HttpClient  ) { }
  
}