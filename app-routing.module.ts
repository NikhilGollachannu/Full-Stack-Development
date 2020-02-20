import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdataComponent } from './getdata/getdata.component';


const routes: Routes = [
  {path:"getdata",component:GetdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
