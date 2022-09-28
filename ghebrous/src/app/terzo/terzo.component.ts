import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent implements OnInit {
  terzo : string;
  constructor() { 
    this.terzo = 'terzo'
  }

  ngOnInit(): void {
  }

}
