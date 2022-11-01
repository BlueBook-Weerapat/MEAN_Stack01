import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component'; 
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'add'},
  {path:'update',component:UpdateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
