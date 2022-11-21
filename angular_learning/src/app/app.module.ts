import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './mentor/table/table.component';

import { HttpClientModule } from '@angular/common/http';
import { TableFormComponent } from './mentor/table-form/table-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

export const appRoutes : Routes = [
  { path: "", component: TableComponent },
  { path: "form", component: TableFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
