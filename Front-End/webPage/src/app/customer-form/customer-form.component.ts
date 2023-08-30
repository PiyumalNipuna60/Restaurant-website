import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  CustomerArray: any[] = [];

  cusId: string = "";
  cusName: string = "";
  cusAddress: string = "";
  cusContact: string = "";

  constructor(private http: HttpClient) {
    this.getAllCustomer();


  }
  getAllCustomer() {
    this.http.get("http://localhost:8080/api/v1/customer/get")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.CustomerArray = resultData;
      });
  }
  

  //--------------------serch eka balanna one-----------------------------------------

  SearchCustomer(customerId: string) {
    this.http.get("http://localhost:8080/api/v1/customer/id"+customerId,{responseType:'text'})
    .subscribe((resultData: any) => {
      console.log(resultData);
      this.CustomerArray = resultData;
    });
  }


  saveCustomer() {
    let bodyDate = {
      "cusId": this.cusId,
      "cusName": this.cusName,
      "cusAddress": this.cusAddress,
      "cusContact": this.cusContact
    }

    this.http.post("http://localhost:8080/api/v1/customer/save", bodyDate, { responseType: 'text' })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Customer saved successfully..!");
        this.clear();
        this.getAllCustomer();
      });
  }

  UpdateCustomer() {
    let bodyDate = {
      "cusId": this.cusId,
      "cusName": this.cusName,
      "cusAddress": this.cusAddress,
      "cusContact": this.cusContact
    }

    this.http.put("http://localhost:8080/api/v1/customer/update", bodyDate, { responseType: 'text' })
      .subscribe((resultData) => {
        console.log(resultData);
        alert("Customer Update successfully..!");
        this.clear();
        this.getAllCustomer();
      });
  }

  DeleteCustomer(data: any) {
    this.http.delete("http://localhost:8080/api/v1/customer/delete"+data.cusId, { responseType: 'text' })
      .subscribe((resultData) => {
        console.log(resultData);
        alert("Customer Delete successfully..!");
        this.clear();
        this.getAllCustomer();
      })
  }


  clear() {
    this.cusId = "";
    this.cusName = "";
    this.cusAddress = "";
    this.cusContact = "";
  }


  setTextFieldData(data: any) {
    this.cusId = data.cusId;
    this.cusName = data.cusName;
    this.cusAddress = data.cusAddress;
    this.cusContact = data.cusContact;
  }







}
