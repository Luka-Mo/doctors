import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const appRoutes = [
  { path: '', component: AppComponent },
  { path: ':id', component: ListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TasksComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,

  ],
  providers: [
    HttpClientModule,
    HttpClientTestingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
