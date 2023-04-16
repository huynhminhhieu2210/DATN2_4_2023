import { Component, Injectable, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'qweqweqwe' 
    }, 1000000);
  }
  
  constructor(injector: Injector){
    setTimeout(() => {
      this.title = 'qweqweqwe' 
    }, 1000000);
  }
  title = '';
}
