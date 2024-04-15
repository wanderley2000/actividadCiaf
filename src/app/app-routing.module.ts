import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './general/home/home.component';


const routes: Routes = [
  {path: '', component: GeneralComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'general/home', component: HomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
