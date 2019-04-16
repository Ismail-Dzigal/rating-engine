import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hearts',
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.css']
})
export class HeartsComponent implements OnInit {

  @Input() currentRate;

  constructor() { }

  ngOnInit() {
  }

}
