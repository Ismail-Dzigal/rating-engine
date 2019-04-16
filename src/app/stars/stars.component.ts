import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
  providers: [NgbRatingConfig]
})
export class StarsComponent implements OnInit {
  @Output() updateRating: EventEmitter<number> = new EventEmitter<number>(); 
  currentRate: number = 3;
  constructor(config: NgbRatingConfig) {
      config.max = 5;
  }


  rate(){
    this.updateRating.emit(this.currentRate);
  }
 

  ngOnInit() {
  }

}


 



