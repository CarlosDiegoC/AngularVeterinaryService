import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetownerCreateComponent } from './components/petowner/petowner-create/petowner-create.component';
import { PetownerUpdateComponent } from './components/petowner/petowner-update/petowner-update.component';
import './views/home/home.component';
import { HomeComponent } from './views/home/home.component';
import { PetownerCrudComponent } from './views/petowner-crud/petowner-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "petowners",
  component: PetownerCrudComponent
},
{
  path: "petowners/create",
  component: PetownerCreateComponent
},
{
  path: "petowners/update/:id",
  component: PetownerUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
