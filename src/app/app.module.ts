import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app.routing';
import {PageModule} from "./page/page.module";
import {SelectModule} from "./selectField/select.module";
import {ServiceModule} from "./service/service.module";
import {MaterialModule} from "./material.module";
import { SelectFromListComponent } from './selectField/select-from-list/select-from-list.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    PageModule,
    SelectModule,
    ServiceModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
