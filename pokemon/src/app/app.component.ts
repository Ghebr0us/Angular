import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';
import { Type } from './models/type.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  obsPokemon!: Observable<Type>;
  data!: Type;

  constructor(public http:HttpClient){ }


  ngOnInit(): void {
    this.obsPokemon = this.http.get<Type>('https://pokeapi.co/api/v2/type')
    this.obsPokemon.subscribe(this.risultato)
  }

  risultato = (data: Type) => {
    this.data = data;
    console.log(data.results);
  }


}