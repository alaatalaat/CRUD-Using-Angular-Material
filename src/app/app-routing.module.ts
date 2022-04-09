import { ShowPiecesComponent } from './show-pieces/show-pieces.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'showall',component:ShowAllComponent},
  {path:'dashboard',component:ShowPiecesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
