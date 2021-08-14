import { Component, OnInit, } from '@angular/core';

@Component({
    selector: 'app-sheet',
    templateUrl: './sheet.component.html',
    styleUrls: ['./sheet.component.css',],
},)
export class SheetComponent implements OnInit {
  name: string;

  constructor() {}

  ngOnInit(): void {
      this.name = '';
  }
}
