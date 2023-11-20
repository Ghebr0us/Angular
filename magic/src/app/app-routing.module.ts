import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', component: SetComponent },
  { path: 'sets/:id/booster', component: CardComponent },
  {path: 'cards/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
