import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../data.model';

@Component({
  selector: 'app-sorted',
  templateUrl: './sorted.component.html',
  styleUrls: ['./sorted.component.css']
})
export class SortedComponent implements OnInit {
  searchType: boolean;
  movies: Movie[];
  filteredMovies: Movie[];
  expand: number = 10;
  disabledButton: boolean = false;
  searchInput: string;

  constructor(private dataService:DataService) { }

  toggleSearch(){
    this.searchType = !this.searchType;
    this.filteredMovies = this.movies;
    this.expand = 10;
    this.disabledButton = false;
    if(this.searchType){
      return this.filteredMovies = this.filteredMovies.filter((item) => item.Type.includes('movie'));
    } else {
      return this.filteredMovies = this.filteredMovies.filter((item) => item.Type.includes('series'));
    }
  }

  showMore(){
    if(this.expand < this.filteredMovies.length){
      this.expand += 10;
    } else {
      this.disabledButton = true; 
    }
  }

  ngOnInit() {
    this.movies = this.dataService.getMovies(this.dataService.data);
    this.filteredMovies = this.movies;
    this.filteredMovies.sort((a,b) => b.Rating - a.Rating);
    this.searchType = false;
    this.toggleSearch();
  }

}
