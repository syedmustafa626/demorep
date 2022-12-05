import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customPipeEx';
  products:any[]=[ 
    {id:1,pname:'Chips',mfDate:new Date("12/03/2020"),price:10,category:'food',pimg:'assets/images/chips.webp'},
    {id:2,pname:'Desk',mfDate:new Date("11/12/2021"),price:999,category:'furniture',pimg:'assets/images/desk.jpg'},
    {id:3,pname:'Laptop',mfDate:new Date("2/2/2022"),price:49999,category:'electronics',pimg:'assets/images/laptop.jfif'},
    {id:4,pname:'Iphone',mfDate:new Date("6/03/2021"),price:89999,category:'phone',pimg:'assets/images/iphone.png'},    
  ]; 
}
