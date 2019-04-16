import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../data.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() type: boolean;
  rateCounter: number = 10;
  content: string;

  constructor() { }

  showAnswers():boolean {
    this.content = this.type? "movie":"series";
    return (this.movie.Type === this.content);
  }

  getRating(newRating:number){
     this.movie.Rating = Number(((this.movie.Rating * this.rateCounter + newRating)/(this.rateCounter + 1)).toFixed(2));
     this.rateCounter++;
  }

  ngOnInit() {
  }

}
