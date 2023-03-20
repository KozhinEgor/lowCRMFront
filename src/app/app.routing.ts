import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./page/main/main.component";
import {ReportComponent} from "./page/report/report.component";
import {TotalDocRepComponent} from "./page/reports/total-doc-rep/total-doc-rep.component";

const routes = [
  {path: 'home', component: MainComponent},
  {path:'report/totalDoctor', component: TotalDocRepComponent},
  {path: '**', redirectTo:'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
