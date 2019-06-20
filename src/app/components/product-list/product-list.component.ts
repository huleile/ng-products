import { Component, OnInit } from '@angular/core';
import { products, Product } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  products = products;
  constructor() { }

  ngOnInit() {
  }

  share(product: Product) {
    window.alert(`The ${product.name} has been shared!`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
