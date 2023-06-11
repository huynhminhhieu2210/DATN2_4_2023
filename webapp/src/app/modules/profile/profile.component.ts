import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ADDRESS_RECEIVE } from 'src/app/core/models/ADDRESS_RECEIVE';
import { INVOICE } from 'src/app/core/models/INVOICE';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { USER } from 'src/app/core/models/USER';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import { ProductService } from 'src/app/core/services/product.service';
import { UserService } from 'src/app/core/services/user.service';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends ComponentBase implements OnInit {
  listProduct?: PRODUCT[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  fullName: string;
  userfullname?: string;
  email?: string;
  branchid?: string;
  roleusername?: string;
  usercode?: string;
  username?: string;
  phone?: string;
  address?: string;
  branchname?: string;
  warning: string;
  editAddress: string;
  editAddressId: string;
  lstAddressReceive: ADDRESS_RECEIVE[];
  lstInvoiceCXN: INVOICE[];
  lstInvoiceCLH: INVOICE[];
  lstInvoiceDG: INVOICE[];
  lstInvoiceDG1: INVOICE[];
  lstInvoiceDN: INVOICE[];
  lstInvoiceDH: INVOICE[];
  addresS_RECEIVE_NAME: string;
  constructor(
    injector: Injector,
    private http: HttpClient, 
    private productService: ProductService,
    private userService: UserService,
    private invoiceService: InvoiceService,
    private socialAuthService: SocialAuthService,
    ) {
    super(injector);
  }
  ngOnInit(): void {
    this.fullName = localStorage.getItem("userfullname");
    this.email = localStorage.getItem('email')?.toString();
    this.branchid = localStorage.getItem('branchid')?.toString();
    this.roleusername = localStorage.getItem('roleusername')?.toString();
    this.usercode = localStorage.getItem('usercode')?.toString();
    this.username = localStorage.getItem('username')?.toString();
    this.phone = localStorage.getItem('phone')?.toString();
    this.address = localStorage.getItem('address')?.toString();
    this.branchname = localStorage.getItem('branchname')?.toString();
    this.phone = this.phone != undefined ? '' : this.phone;
    this.address = this.address != undefined ? '' : this.address;
    this.email = this.email != undefined ? '' : this.email;
    this.search();
    this.onLoadAddressReceive();
    this.onLoadInvoice();
  }
  search(){
    var filtera = new PRODUCT();
    this.productService.Product__search(filtera).subscribe((response: any)=>{
      this.listProduct = response;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.search();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.search();
  }
  formatCurrency(num)
  {
    let sign: any;
    let cents: any;
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
    {
        num = "0";
    }

    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();

    if (cents < 10)
    {
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }

    return (((sign) ? '' : '-') + num + 'đ');
  }
  onViewInvoice(item: any){
    this.navigatePassParam('/invoice-detail', { invoiceid: item }, { filterInput: JSON.stringify(undefined) });
  }
  logout(){
    this.socialAuthService.authState.subscribe((user) => {
      if(user != null && user != undefined){
        this.socialAuthService.signOut();
      }
    });
    localStorage.removeItem("jwt");
    setTimeout(() => {
      this.router.navigate(["/login"]);
    }, 500);
  }
  onchangePassNewCheck(form: NgForm){
    if(form.value.passNew != form.value.passNewCheck){
      this.warning = 'Mật khẩu không khớp';
    }else{
      this.warning = '';
    }
  }
  onChangePass(form: NgForm){
    this.userService.User_changepass(form.value.passOld,form.value.passNew).subscribe((response: any)=>{
    });

  }
  onLoadAddressReceive(){
    this.userService.User_load_address_receive(localStorage.getItem('username')?.toString()).subscribe((response: any)=>{
      this.lstAddressReceive = response;
    });
  }
  onLoadInvoice(){
    var input = new INVOICE();
    input.creatE_ID = localStorage.getItem('username')?.toString();
    input.status = 'NEW';
    this.invoiceService.Invoice_search(input).subscribe((response: any)=>{
      this.lstInvoiceCXN = response;
    });
    var input1 = new INVOICE();
    input1.creatE_ID = localStorage.getItem('username')?.toString();
    input1.status = 'WAIT_GOOD';
    this.invoiceService.Invoice_search(input1).subscribe((response: any)=>{
      this.lstInvoiceCLH = response;
    });
    var input2 = new INVOICE();
    input2.creatE_ID = localStorage.getItem('username')?.toString();
    input2.status = 'SHIP';
    this.invoiceService.Invoice_search(input2).subscribe((response: any)=>{
      this.lstInvoiceDG = response;
    });
    var input3 = new INVOICE();
    input3.creatE_ID = localStorage.getItem('username')?.toString();
    input3.status = 'SHIP_DONE';
    this.invoiceService.Invoice_search(input3).subscribe((response: any)=>{
      this.lstInvoiceDG1 = response;
    });
    var input4 = new INVOICE();
    input4.creatE_ID = localStorage.getItem('username')?.toString();
    input4.status = 'DONE';
    this.invoiceService.Invoice_search(input4).subscribe((response: any)=>{
      this.lstInvoiceDN = response;
    });
    var input5 = new INVOICE();
    input5.creatE_ID = localStorage.getItem('username')?.toString();
    input5.status = 'CANCEL';
    this.invoiceService.Invoice_search(input5).subscribe((response: any)=>{
      this.lstInvoiceDH = response;
    });
  }
  onSave(form: NgForm){
    var input = new USER();
    input.useR_NAME = localStorage.getItem('username')?.toString();
    input.useR_FULLNAME = form.value.fullName;
    input.useR_PHONE = form.value.phone;
    input.useR_ADDRESS = form.value.address;
    input.useR_EMAIL = form.value.email;
    this.userService.User_update_info(input).subscribe((response: any)=>{
      const credentials = {
        'useR_NAME' : localStorage.getItem('username')?.toString(),
        'password' : form.value.password,
        'type': 'customer'
      }
      this.http.post("https://localhost:5001/api/Users/USER_GET_INFO_LOGIN", credentials)
          .subscribe((response: any) => {
            localStorage.setItem('userid',response[0].useR_ID)
            localStorage.setItem('branchid',response[0].brancH_ID)
            localStorage.setItem('roleuserid',response[0].rolE_USER_ID)
            localStorage.setItem('roleusername',response[0].rolE_USER_NAME)
            localStorage.setItem('usercode',response[0].useR_CODE)
            localStorage.setItem('username',response[0].useR_NAME)
            localStorage.setItem('userfullname',response[0].useR_FULLNAME)
            localStorage.setItem('email',response[0].useR_EMAIL)
            localStorage.setItem('phone',response[0].useR_PHONE)
            localStorage.setItem('address',response[0].useR_ADDRESS)
          })
    });
  }
  onEditAddress(form: NgForm){
    var input = new ADDRESS_RECEIVE();
    input.addresS_RECEIVE_ID = this.editAddressId;
    input.addresS_RECEIVE_NAME =   this.editAddress;
    this.userService.User_update_address_receive(input).subscribe((response: any)=>{
      this.onLoadAddressReceive();
    });
  }
  onClickEditAddress(id: string, name: string){
    this.editAddressId = id;
    this.editAddress = name;
  }
  onSaveAddress(){
    var input = new ADDRESS_RECEIVE();
    input.useR_ID = localStorage.getItem('userid')?.toString()
    input.addresS_RECEIVE_NAME =   this.addresS_RECEIVE_NAME;
    this.userService.User_insert_address_receive(input).subscribe((response: any)=>{
      this.onLoadAddressReceive();
    });
  }
  onDeleteAddress(id: string){
    this.userService.User_delete_address_receive(id).subscribe((response: any)=>{
      this.onLoadAddressReceive();
    });
  }
}