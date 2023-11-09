import{HttpClient} from '@angular/common/http'
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ListaPokemon,Pokemon} from '../models/pokemon.model'
@Component({
  selector: 'app-listpokemon',
  templateUrl: './listpokemon.component.html',
  styleUrls: ['./listpokemon.component.css']
})


export class ListpokemonComponent {
   id!: string;
   List!:ListaPokemon;
  constructor(public http:HttpClient, private route:ActivatedRoute) {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['path'];
      console.log(this.id);
  });
  this.http.get<ListaPokemon>(`https://pokeapi.co/api/v2/type/${this.id}`)
  
  }
    
  
 }
