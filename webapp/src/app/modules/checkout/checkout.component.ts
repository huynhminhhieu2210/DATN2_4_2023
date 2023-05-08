import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ADDRESS_RECEIVE } from 'src/app/core/models/ADDRESS_RECEIVE';
import { INVOICE } from 'src/app/core/models/INVOICE';
import { INVOICE_DT } from 'src/app/core/models/INVOICE_DT';
import { PRODUCT } from 'src/app/core/models/PRODUCT';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { UserService } from 'src/app/core/services/user.service';
import { ComponentBase } from 'src/app/shared/components/component-base';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends ComponentBase implements OnInit {
  inputModel?: INVOICE = new INVOICE();
  listProduct?: PRODUCT[];
  listCart?: INVOICE_DT[];
  lstAddressReceive: ADDRESS_RECEIVE[];
  total: number = 0;
  totaltmp: number = 0;
  momo: boolean = false;
  cost: boolean = true;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  isShowError = false;
  @ViewChild('editForm') editForm?: ElementRef;
  constructor(
    injector: Injector,
    private cartService: CartService,
    private userService: UserService,
    ) {
    super(injector);
  }
  ngOnInit(): void {
    this.inputModel.receiver = localStorage.getItem("userfullname");
    this.inputModel.receiveR_PHONE = localStorage.getItem("phone");
    this.inputModel.receiveR_ADDRESS = localStorage.getItem("address");
    this.loadCart();
    this.userService.User_load_address_receive(localStorage.getItem('username')?.toString()).subscribe((response: any)=>{
      this.lstAddressReceive = response;
    });
  }
  removeCart(id: string){
    var userlogin = localStorage.getItem("username");
    this.cartService.Cart_delete(userlogin,id).subscribe((response: any)=>{
      this.loadCart();
    });
  }
  loadCart(){
    this.total = 0;
    this.totaltmp = 0;
    var userlogin = localStorage.getItem("username");
    this.cartService.Cart_load(userlogin).subscribe((response: any)=>{
      this.listCart = response;
      if(this.listCart != undefined && this.listCart != null){
        this.listCart.forEach(element => {
          this.total += element.quantity * element.price;
          this.totaltmp += element.quantity * element.price;
        });
      }
    });

  }
  updateCart(){
    var userlogin = localStorage.getItem("username");
    var input = new INVOICE();
    input.creatE_ID = localStorage.getItem("username");
    input.LST_INVOICE_DT = this.listCart;
    this.cartService.Cart_update(input).subscribe((response: any)=>{
      this.loadCart();
    });

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
  onview(item: any){
    this.navigatePassParam('/product-detail', { productid: item }, { filterInput: JSON.stringify(undefined) });
  }
  onSaveInvoice(){
    if ((this.editForm as any).form.invalid) {
      this.isShowError = true;
      return;
    }
    var input = new INVOICE();
    input.methoD_PAY = this.cost == true ? 'Thanh toán khi nhận hàng' : 'Thanh toán online';
    input.creatE_ID = localStorage.getItem("username");
    input.receiver  = this.inputModel.receiver;
    input.receiveR_PHONE  = this.inputModel.receiveR_PHONE;
    input.receiveR_ADDRESS  = this.inputModel.receiveR_ADDRESS;
    this.cartService.Cart_checkout(input).subscribe((response: any)=>{
      this.navigatePassParam('/invoice-detail', { invoiceid: response[0].id }, { filterInput: JSON.stringify(undefined) });
    });
  }
  changRadioBtn(fil: string){
    if(fil == "T"){
      this.cost = true;
      this.momo = false;
    }else{
      this.cost = false;
      this.momo = true;
    }
  }
}