import { Component, OnInit, } from '@angular/core';

@Component({
    selector: 'app-detail-display',
    templateUrl: './detail-display.component.html',
    styleUrls: ['./detail-display.component.css',],
},)
export class DetailDisplayComponent implements OnInit {
  name: string;

  constructor() {}

  ngOnInit(): void {
      this.name = '';
  }
}
