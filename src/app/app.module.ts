import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BlazonsComponent } from './pages/blazons/blazons.component';
import { BlazonDetailComponent } from './pages/blazon-detail/blazon-detail.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BlazonsAdminComponent } from './components/blazons-admin/blazons-admin.component';
import { BlazonIdAdminComponent } from './components/blazon-id-admin/blazon-id-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    BlazonsComponent,
    BlazonDetailComponent,
    LoginFormComponent,
    BlazonsAdminComponent,
    BlazonIdAdminComponent,
    HomeComponent,
    CreateFormComponent,
    PaginatePipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule, 
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
