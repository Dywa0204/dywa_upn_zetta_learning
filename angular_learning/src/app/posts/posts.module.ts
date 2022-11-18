import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';

import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appRoutes : Routes = [
  { path: "", component: PostListComponent },
  { path: "form", component: PostFormComponent }
];

@NgModule({
  declarations: [
    PostListComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule
  ]
})
export class PostsModule { }
