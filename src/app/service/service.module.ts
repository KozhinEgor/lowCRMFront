import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {RouteReuseStrategy} from "@angular/router";
import {CustomPaginatorIntl} from "./custom.paginator";
import {CustomRouteReuseStrategy} from "./custom.route";

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl },
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ]})
export class ServiceModule { }
