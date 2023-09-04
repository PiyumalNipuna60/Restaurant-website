import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  ItemArrays: any[] = [];

  itemId: string = "";
  itemName: string = "";
  qty: number = 0;
  price: string = "";


  constructor(private http: HttpClient) {
    this.getAllItem();
  }


  getAllItem() {
    this.http.get("http://localhost:8080/api/v1/item/get")
      .subscribe((responseData: any) => {
        console.log(responseData);
        this.ItemArrays = responseData;
      });
  }


  saveItem() {
    let bodyData = {
      "itemId": this.itemId,
      "itemName": this.itemName,
      "qty": this.qty,
      "price": this.price
    }

    this.http.post("http://localhost:8080/api/v1/item/save", bodyData, { responseType: "text" })
      .subscribe((responseData: any) => {
        console.log(responseData);
        alert("Item saved successfully..!");
        this.getAllItem();
        this.clear();
      });
  }


  clear() {
    this.itemId = "";
    this.itemName = "";
    this.qty = 0;
    this.price = "";
  }


  
}
