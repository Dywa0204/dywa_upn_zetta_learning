import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BomComponent } from './bom/bom.component';
import { BomCounterComponent } from './bom-counter/bom-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    BomComponent,
    BomCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
