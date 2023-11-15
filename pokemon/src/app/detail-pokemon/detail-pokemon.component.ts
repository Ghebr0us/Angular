import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Root } from '../models/detail.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})


export class DetailPokemonComponent {
  //Ossreva i cambi di routing
  obs!: Observable<Root>;
  detail!: Root;
  activatedRoute: any;
  id!: any;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit() {

    this.route.params.subscribe(paramId => {
      this.id = paramId['path']

    })
    this.obs = this.http.get<Root>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
    this.obs.subscribe(this.res)
  }
  res = (detail: Root) => {
    this.detail = detail
    console.log(detail)
  }
}