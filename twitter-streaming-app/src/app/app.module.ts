import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { BloomFilterComponent } from './bloom-filter/bloom-filter.component';
import {  HttpClientModule } from '@angular/common/http';
import { BloomFilterService } from './observables/bloomFilterService';

@NgModule({
  declarations: [
    AppComponent,
    BloomFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BloomFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
