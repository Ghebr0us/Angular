import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  name : string[]
  constructor() {
    this.name = ['ruspa','escavatore','bulldozer','minipala','rulli compattatori','dumper','camion betoniere','gru','motolivellatrici','abbattitrici forestali']
   }

  ngOnInit(): void {
  }

}
