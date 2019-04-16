import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router: Router) { }

  buttonClick(route): void {
    if(route === 'rate'){
      this.router.navigate(['/rate']);
    } else {
      this.router.navigate(['/sorted']);
    }
  }

  ngOnInit() {
  }

}
