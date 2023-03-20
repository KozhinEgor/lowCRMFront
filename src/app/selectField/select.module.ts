import {NgModule} from "@angular/core";
import {SelectGroupComponent} from "./select-group/select-group.component";
import {DataRangeComponent} from "./data-range/data-range.component";
import {MaterialModule} from "../material.module";
import {CommonModule} from "@angular/common";
import { SpecDoctorComponent } from './spec-doctor/spec-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';


@NgModule({
  declarations: [
    SelectGroupComponent,
    DataRangeComponent,
    SpecDoctorComponent,
    DoctorComponent],
    exports: [
        DataRangeComponent,
        SelectGroupComponent,
      SpecDoctorComponent,
      DoctorComponent
    ],
  imports: [
    MaterialModule,
    CommonModule

  ]
})
export class SelectModule { }
