import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends ComponentBase implements OnInit{
  ngOnInit(): void {
    this.reloadView();
  }
  constructor(
    injector: Injector,
    ) {
    super(injector);
  }

}
