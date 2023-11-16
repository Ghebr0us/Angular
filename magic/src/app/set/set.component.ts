import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Set } from '../models/set.model';
@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent {
  obsSet!: Observable<Set>
  data!: Set;


  constructor(public http:HttpClient) {}


  ngOnInit(): void {
    this.obsSet = this.http.get<Set>('https://api.magicthegathering.io/v1/sets')
    this.obsSet.subscribe(this.risultato)
  }

  risultato = (data: Set) => {
    this.data = data;
    console.log(data.name);
  }

  getLastPart(arg0: string) {
    return arg0.split("/")[6]
  }
}
