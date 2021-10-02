import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddNewMealComponent } from './components/settings/add-new-meal/add-new-meal.component';
import { ManageMealComponent } from './components/settings/manage-meal/manage-meal.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'settings', component: SettingsComponent, children: [
    {path: '', component: AddNewMealComponent},
    {path: 'add-new-meal', component: AddNewMealComponent},
    {path: 'manage-meal', component: ManageMealComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
