import { NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the Froala Editor plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;

import { Globals } from './Shared/globals';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SpecialsService } from './Services/specials.service';
import { VehiclesService } from './Services/vehicles.service';
import { MiscService } from './Services/misc.service';
import { CustomLazyMapsAPILoader } from './Services/custom-lazy-apikey-loader.service';
import { SearchService } from 'app/Services/search.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { NgxSpinnerModule} from 'ngx-spinner';

import { LoadingindicatorDirective } from './directives/loadingindicator.directive';

import { AdminComponent } from './admin/admin.component';
import { ContactFormComponent } from './contactform/contactform.component';
import { FeaturedvehiclesComponent } from './featuredvehicles/featuredvehicles.component';
import { HomeComponent } from './home/home.component';
import { NewvehiclesComponent } from './newvehicles/newvehicles.component';
import { PageNotFoundComponent } from './Shared/not-found.component';
import { SalesComponent } from 'app/sales/sales.component';
import { SearchvehiclesComponent } from './searchvehicles/searchvehicles.component';
import { SpecialsComponent } from './specials/specials.component';
import { SpecialsCarouselComponent } from './specials-carousel/specials-carousel.component';
import { UsedvehiclesComponent } from './usedvehicles/usedvehicles.component';
import { ApiInterceptor } from './Shared/api-interceptor';
import { ValidationSummaryComponent } from './Shared/validation-summary/validation-summary.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehiclePurchaseComponent } from './vehicle-purchase/vehicle-purchase.component';
import { SearchSetup } from './Shared/search-setup';
import { VehiclefilterPipe } from './Pipes/vehiclefilter.pipe';
import { DatefilterPipe } from './Pipes/datefilter.pipe';
import { PricefilterPipe } from './Pipes/pricefilter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProgressiveImageModule } from './progressive-image/progressive-image.module';
import { ModelPipe } from './Pipes/model.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpecialsCarouselComponent,
    FeaturedvehiclesComponent,
    UsedvehiclesComponent,
    NewvehiclesComponent,
    SearchvehiclesComponent,
    PageNotFoundComponent,
    HomeComponent,
    SpecialsComponent,
    ContactFormComponent,
    SalesComponent,
    AdminComponent,
    ValidationSummaryComponent,
    VehicleDetailComponent,
    LoadingindicatorDirective,
    VehicleEditComponent,
    VehiclePurchaseComponent,
    VehiclefilterPipe,
    DatefilterPipe,
    PricefilterPipe,
    ModelPipe
    
    
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot(),
    AgmCoreModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ProgressiveImageModule
    
   
  ],
  providers: [
    SpecialsService,
    VehiclesService,
    MiscService,
    SearchService,
    Globals,
    { provide: MapsAPILoader, useClass: CustomLazyMapsAPILoader },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi:true }

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent
    ],
  exports: [HomeComponent]
})

export class AppModule {
  
}
