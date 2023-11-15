import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';
import { ListpokemonComponent } from './listpokemon/listpokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';


const routes: Routes = [
  { path: '', component: PokelistComponent },
  { path: 'pokemon/:path', component: ListpokemonComponent },
  {path: "detail/:path", component: DetailPokemonComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
