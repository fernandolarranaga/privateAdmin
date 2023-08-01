import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BlazonsComponent } from './pages/blazons/blazons.component';
import { BlazonDetailComponent } from './pages/blazon-detail/blazon-detail.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BlazonsAdminComponent } from './components/blazons-admin/blazons-admin.component';
import { BlazonIdAdminComponent } from './components/blazon-id-admin/blazon-id-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'heraldry',
    component: BlazonsComponent,
  },{
  path: 'heraldry/:id',
  component: BlazonDetailComponent,
},
{
path: 'heraldryCreate',
component: CreateFormComponent,
canActivate: [AuthGuard]
},
{
  path: 'admin',
  component:BlazonsAdminComponent,
  canActivate: [AuthGuard]
},
{
  path: 'admin/:id',
  component:BlazonIdAdminComponent,
  canActivate: [AuthGuard]
},
{
  path: 'contact',
  component:ContactComponent,
},
  { path: "**", component: NotFoundPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
