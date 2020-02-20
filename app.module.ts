import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { GetdataComponent } from './getdata/getdata.component';

@NgModule({
  declarations: [
    AppComponent,
    GetdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
