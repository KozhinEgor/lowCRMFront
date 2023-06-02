import {NgModule} from "@angular/core";
import {SelectGroupComponent} from "./select-group/select-group.component";
import {DataRangeComponent} from "./data-range/data-range.component";
import {MaterialModule} from "../material.module";
import {CommonModule} from "@angular/common";
import { SpecDoctorComponent } from './spec-doctor/spec-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import {SelectFromListComponent} from "./select-from-list/select-from-list.component";



@NgModule({
  declarations: [
    SelectGroupComponent,
    DataRangeComponent,
    SpecDoctorComponent,
    DoctorComponent,
    SelectFromListComponent],
    exports: [
        DataRangeComponent,
        SelectGroupComponent,
      SpecDoctorComponent,
      DoctorComponent,
      SelectFromListComponent
    ],
  imports: [
    MaterialModule,
    CommonModule

  ]
})
export class SelectModule { }
