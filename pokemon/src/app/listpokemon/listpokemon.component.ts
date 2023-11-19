import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaPokemon, Pokemon } from '../models/pokemon.model'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listpokemon',
  templateUrl: './listpokemon.component.html',
  styleUrls: ['./listpokemon.component.css']
})


export class ListpokemonComponent {
  id!: string;
  List!: ListaPokemon;
  obsPokemon!: Observable<ListaPokemon>;
  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['path'];
      console.log(this.id);
    });
    this.obsPokemon = this.http.get<ListaPokemon>(`https://pokeapi.co/api/v2/type/${this.id}`)
    this.obsPokemon.subscribe(this.risultato)
  }

  risultato = (List: ListaPokemon) => {
    this.List = List;
    console.log(List);
  }

  getLastPart(arg0: string) {
    const list = arg0.split("/")
    list.pop()
    return list.pop()
  }
}
