import { Injectable } from '@angular/core';
import { Movie } from './data.model';
import  { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  moviesArray: Movie[];
  sortedArray: Movie[];
  data = data;

  getMovies(items): Movie[] {
    return [... items];
  }
  constructor() { }
}
