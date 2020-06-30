import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  items: ShoppingItem[] = [
    { description: 'Shampoo', purchased: false },
    { description: 'Beer', purchased: true },
    { description: 'More Beer', purchased: false }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(itemE1: HTMLInputElement): void {
    const itemToAdd: ShoppingItem = {
      description: itemE1.value,
      purchased: false
    };
    this.items = [itemToAdd, ...this.items];
    // spread operator (...) passes the rest of the array aftr the new item
    itemE1.value = '';
    itemE1.focus();
  }

  markPurchased(item: ShoppingItem): void {
    item.purchased = true;
  }

}
