import { Component, OnInit } from '@angular/core';

import { IProduct } from './products';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //Importing the service and the data
  constructor(private productService: ProductService) {
   
    this.listFilter = '';
  }

  ngOnInit() {
    console.log('IN INIT')
    console.log(this)
    this.products = this.productService.getProducts()
    this.filteredProducts = this.products;
  }
  pageTitle: string = 'Product List!';
  imageWidth = 50;
  imageHeight = 10;
  showImage: boolean = false;
  _listFilter = '';
  get listFilter(): string {
    console.log(this._listFilter)
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(this._listFilter)
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];


  onRatingClicked(message: string):void{
    this.pageTitle = 'Product List: '+message;
  }


  toggleImage(): void {
    this.showImage = !this.showImage
    console.log(this)
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
