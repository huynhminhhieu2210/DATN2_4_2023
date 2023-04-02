import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CUSTOMER } from 'src/app/core/models/CUSTOMER';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(private customerService: CustomerService,
    private ref: ChangeDetectorRef,
    private http:HttpClient){}
  
  ngOnInit(): void {
      this.search();
  }
  lstCustomer: CUSTOMER[] | undefined;
  search(){
    var filter = new CUSTOMER();
    this.customerService.Customer_search(filter).subscribe((response: any)=>{
      this.lstCustomer = response;
    });
    this.ref.detectChanges();
  }
}
