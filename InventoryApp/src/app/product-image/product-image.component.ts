import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  template:`
  	<img class="product-image" [src]="product.imageURL">
  `
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  
  constructor() { }

  ngOnInit(): void {
  }

}
