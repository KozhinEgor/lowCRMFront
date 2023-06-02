import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ReportCreaterDto} from "../../../core/dto/ReportCreaterDto";
import {FilterService} from "../../../service/FilterService";
import {SelectFromListComponent} from "../../../selectField/select-from-list/select-from-list.component";
import {BehaviorSubject, concatMap, tap} from "rxjs";
import {BaseDictionary} from "../../../core/dto/BaseDictionary";
import {DocDto} from "../../../core/doc.dto";
import {SpecDocDto} from "../../../core/spec.doc.dto";
import {ReportBase} from "../../../core/dto/ReportBase";

@Component({
  selector: 'app-total-doc-rep',
  templateUrl: './total-doc-rep.component.html',
  styleUrls: ['./total-doc-rep.component.scss']
})
export class TotalDocRepComponent implements OnInit {
  panelOpenState = true;
  filter: ReportBase = new ReportBase();
  filterString ='';

  selectDoctor: BaseDictionary = new BaseDictionary();

  @ViewChild('doctors')
  doctors:SelectFromListComponent;
  @ViewChild('specDoctors')
  specDoctors:SelectFromListComponent;
  constructor( public filterService:FilterService) { }

  ngOnInit(): void {
    this.filterService.getDoc().pipe(
    tap(doctors => {
      var ds  = [{id: null, name: ''} as DocDto].concat(doctors);
      this.doctors.setValue(new BehaviorSubject<DocDto[]>(ds),ds)   ;
    }),
      concatMap(_ => this.filterService.getSpecDoc()),
      tap(specDoctors => {
        var specDoc = [{id: null, name: ''} as SpecDocDto].concat(specDoctors)
        this.specDoctors.setValue(new BehaviorSubject<SpecDocDto[]>(specDoc), specDoc);
      })
    ).subscribe(
      _ => {
        // this.initialized = 'success';
      },
      e => {
        // this.initialized = 'failure';
      }
    );
  }
  dateChange(range: FormGroup){
    this.filter.dateStart = range.value.dateStart;
    this.filter.dateFinish = range.value.dateFinish;
  }
  specDoctorChange(spec:BaseDictionary){
    this.filterService.getDoc(spec.id).pipe(
      tap(doctors => {

        var ds  = [{id: null, name: ''} as DocDto].concat(doctors);
        this.doctors.setValue(new BehaviorSubject<DocDto[]>(ds),ds);
      })
    ).subscribe()
  }
  show(){
    this.filter.doctor = this.doctors.value;
    this.filter.doctorSpec = this.specDoctors.value;
    this.filterString = this.filterService.getTextFilter(this.filter);
  }
}
