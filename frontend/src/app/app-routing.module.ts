import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import './views/home/home.component';
import { HomeComponent } from './views/home/home.component';
import './views/pet-crud/pet-crud.component'
import { PetCrudComponent } from './views/pet-crud/pet-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "pets",
  component: PetCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
