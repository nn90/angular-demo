import { Component, OnInit } from '@angular/core';

import { IProduct } from './products';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'Cart';
  }

  ngOnInit() {
    console.log('IN INIT')
    console.log(this)
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

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }
  ];


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
