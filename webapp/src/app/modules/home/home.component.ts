import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      console.log(10)
    }, 100000);
  }
  constructor(){
    setTimeout(() => {
      console.log(10)
    }, 100000);
  }

}
