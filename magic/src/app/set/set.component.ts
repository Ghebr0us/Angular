import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Set, Welcome } from '../models/set.model';
@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent {
  obsSet!: Observable<Welcome>;
  data!: Welcome;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.obsSet = this.http.get<Welcome>('https://api.magicthegathering.io/v1/sets')
    this.obsSet.subscribe(this.risultato)
  }

  risultato = (data: Welcome) => {
    this.data = data;
    console.log(data.sets);
  }
}
