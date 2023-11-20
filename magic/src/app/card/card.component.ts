import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Welcome } from '../models/card.model'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  id!: string;
  data!: Welcome;
  obsCard!: Observable<Welcome>;

  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['id'];
    });
    this.obsCard = this.http.get<Welcome>(`https://api.magicthegathering.io/v1/sets/${this.id}/booster`)
    this.obsCard.subscribe(this.risultato)
  }

  risultato = (data: Welcome) => {
    this.data = data;
    console.log(data);
  }
}


