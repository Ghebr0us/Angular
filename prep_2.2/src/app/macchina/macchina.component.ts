import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {
  @Input() m_name: string = "";
  comp : string[]
  constructor() {
    this.comp = ['bulloni','viti','ferro']
   }

  ngOnInit(): void {
  }

}
