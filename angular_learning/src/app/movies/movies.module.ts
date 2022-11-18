import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './movie-list/movie-list.component';

export const appRoutes : Routes = [
  { path: "", component: DashboardComponent }
  //{ path: "form", component: PostFormComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MoviesModule { }
