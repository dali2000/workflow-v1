import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';


import { PwelcomeComponent } from './pwelcome/pwelcome.component';
import { LoginComponent } from './user/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjouterAdminComponent } from './superAdmin/ajouter-admin/ajouter-admin.component';
import { HomeComponent } from './home/home.component';
import { ListAdminComponent } from './superAdmin/list-admin/list-admin.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddEntrepriseComponent } from './entreprise/add-entreprise/add-entreprise.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfilComponent } from './user/profil/profil.component';

const routes: Routes = [
  { path:'', component: PwelcomeComponent },
  { path: 'SignUp', component: SignUpComponent },
  {path:"Login", component: LoginComponent},
  { path: 'ajouter_admin', component: AjouterAdminComponent },
  {path:'Home', component: HomeComponent},
  { path: 'liste_admin', component: ListAdminComponent },
  { path: 'add_employee', component: AddEmployeeComponent },
  { path: 'add_entreprise', component: AddEntrepriseComponent },
  { path: 'list_employee', component: ListEmployeeComponent },

  { path: 'UserProfil/:id', component: ProfilComponent },


];  // <-- import RouterModule and define routes

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    FooterComponent,
    PwelcomeComponent,
    LoginComponent,
    NavbarComponent,
    AjouterAdminComponent,
    HomeComponent,
    ListAdminComponent,
    AddEmployeeComponent,
    AddEntrepriseComponent,
    ListEmployeeComponent,
    ProfilComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
 
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
