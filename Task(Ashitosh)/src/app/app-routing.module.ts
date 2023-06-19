import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from '../app/car/car.component';
import { ReactiveFrom2Component } from './reactive-from2/reactive-from2.component';
// import { ReactiveFrom2Component } from './reactive-from2/reactive-from2.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:ReactiveFrom2Component },
  {path:'app-car',component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
