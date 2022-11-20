import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorListComponent } from './actor-list/actor-list.component';

export const appRoutes : Routes = [
  { path: "", component: DashboardComponent },
  { path: "movie", component: MovieDetailComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    MovieListComponent,
    MovieDetailComponent,
    ActorListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class MoviesModule { }
