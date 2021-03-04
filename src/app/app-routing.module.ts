import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BugsComponent } from './bugs/bugs.component';
import { DetailsComponent } from './bugs/details/details.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AddNewComponent } from './bugs/add-new/add-new.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  {
    path: 'bugs',
    children: [
      {
        path: '',
        component: BugsComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'add-new',
        component: AddNewComponent
      }
    ]

  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
