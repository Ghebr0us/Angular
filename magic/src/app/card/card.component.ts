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
  data!: Welcome;
  obsRoute!: Observable<ParamMap>
  obsCard!: Observable<Welcome>;
  constructor(public http: HttpClient, private route: ActivatedRoute) { };
  ngOnInit(): void {
    this.obsRoute = this.route.paramMap
    this.obsRoute.subscribe(this.getRouterParam)
  }
  getRouterParam = (params:ParamMap ) => {
    let id = params.get('path')
    if (id != null){
      this.obsCard = this.http.get<Welcome>('https://api.magicthegathering.io/v1/sets/'+ id)
      this.obsCard.subscribe((data:any)=> this.data = data)
    }
  }
}

