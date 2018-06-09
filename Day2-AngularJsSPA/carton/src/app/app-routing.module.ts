import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CarComponent } from './car/car.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'cars', component: CarComponent},
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {  
}
