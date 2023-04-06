import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent extends ComponentBase implements OnInit{
  ngOnInit(): void {
    this.reloadView();
  }
  constructor(
    injector: Injector,
    ) {
    super(injector);
  }

}
