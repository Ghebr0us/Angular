import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { Type } from '../models/type.model';
@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent {
  obsPokemon!: Observable<Type>;
  data!: Type;

  constructor(public http: HttpClient) { }


  ngOnInit(): void {
    this.obsPokemon = this.http.get<Type>('https://pokeapi.co/api/v2/type')
    this.obsPokemon.subscribe(this.risultato)
  }

  risultato = (data: Type) => {
    this.data = data;
    console.log(data.results);
  }
  
  getLastPart(arg0: string){
    return arg0.split("/")[6]
  }
}
