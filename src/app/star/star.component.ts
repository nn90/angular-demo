import { Component, OnInit, OnChanges, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  // rating: number = 4;
  @Input() rating : number;
  starWidth: number;
  constructor() { };
  //Decorating with Output container
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>()
  onClick():void{
    console.log(`${this.rating} was clicked`)
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5
  }


}
