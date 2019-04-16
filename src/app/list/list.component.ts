import { Component, OnInit } from '@angular/core';
import { Movie } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: Movie[];
  searchType: boolean = true;
 
  constructor(private dataService:DataService) { }

  toggleSearch(){
    this.searchType = !this.searchType;
  }

  sortedMovies(){
    return this.movies.sort((a,b) => b.Rating - a.Rating);
  }

  ngOnInit() {
    this.movies = this.dataService.getMovies(this.dataService.data);
  }
}
