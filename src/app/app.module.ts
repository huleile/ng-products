import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
   ProductListComponent,
   ProductAlertsComponent,
   TopBarComponent,
   ProductDetailsComponent,
   CartComponent,
   ShippingComponent
 } from './components';

@NgModule({
   declarations: [
      AppComponent,
      ProductListComponent,
      ProductAlertsComponent,
      TopBarComponent,
      ProductDetailsComponent,
      CartComponent,
      ShippingComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
