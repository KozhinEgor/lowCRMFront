import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {TotalDocRepComponent} from "./reports/total-doc-rep/total-doc-rep.component";
import {ReportComponent} from "./report/report.component";
import {SelectModule} from "../selectField/select.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NgxEchartsModule} from "ngx-echarts";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";
import {AppModule} from "../app.module";

@NgModule({
  declarations: [
    MainComponent,
    TotalDocRepComponent,
    ReportComponent
  ],
    imports: [
        SelectModule,
        NgxEchartsModule,
        MaterialModule
    ]})
export class PageModule { }
