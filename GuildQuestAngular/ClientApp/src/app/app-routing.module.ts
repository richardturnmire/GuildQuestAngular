import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./Shared/not-found.component";

import { FeaturedvehiclesComponent } from './featuredvehicles/featuredvehicles.component';
import { NewvehiclesComponent } from './newvehicles/newvehicles.component';
import { UsedvehiclesComponent } from './usedvehicles/usedvehicles.component';
import { SpecialsComponent } from './specials/specials.component';
import { ContactFormComponent } from './contactform/contactform.component';
import { SalesComponent } from './sales/sales.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehiclePurchaseComponent } from './vehicle-purchase/vehicle-purchase.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'used/detail/:id', component: VehicleDetailComponent },
  { path: 'new/detail/:id', component: VehicleDetailComponent },
  { path: 'new', component: NewvehiclesComponent },
  { path: 'used', component: UsedvehiclesComponent },
  { path: 'specials', component: SpecialsComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'sales/purchase/:id', component: VehiclePurchaseComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'admin/edit/:id', component: VehicleEditComponent },
  { path: 'admin', component: AdminComponent },
  
  // { path: ':id', component: vehicle-detailComponent },
  
  //{
  //  path: 'heroes',
  //  component: HeroListComponent,
  //  data: { title: 'Heroes List' }
  //},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
