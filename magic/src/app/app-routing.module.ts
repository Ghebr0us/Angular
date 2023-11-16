import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';

const routes: Routes = [
  {path: '',component: SetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
