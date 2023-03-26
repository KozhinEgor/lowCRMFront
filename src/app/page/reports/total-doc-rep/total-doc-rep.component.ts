import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FilterDto} from "../../../core/filter.dto";
import {FilterService} from "../../../service/FilterService";
import {SelectFromListComponent} from "../../../selectField/select-from-list/select-from-list.component";
import {BehaviorSubject, concatMap, tap} from "rxjs";
import {BaseListFilterDto} from "../../../core/dto/BaseListFilterDto";

@Component({
  selector: 'app-total-doc-rep',
  templateUrl: './total-doc-rep.component.html',
  styleUrls: ['./total-doc-rep.component.css']
})
export class TotalDocRepComponent implements OnInit {
  panelOpenState = true;
  filter: FilterDto = new FilterDto();
  filterString ='';

  @ViewChild('doctors')
  doctors:SelectFromListComponent;
  constructor( public filterService:FilterService) { }

  ngOnInit(): void {
    this.filterService.getDoc('').pipe(
    tap(doctors => {
      console.log(doctors);
      var ds  = [{id: null, name: ''} as BaseListFilterDto].concat(doctors);
      this.doctors.setValue(new BehaviorSubject<BaseListFilterDto[]>(ds),ds)   ;
/*    }),
      concatMap(_ => this.dictionaryService.claimTypes('')),
      tap(claimTypes => {
        this.dictClaimTypes = [{code: null, name: ''} as ClaimTypeDTO].concat(claimTypes)
        this.dictClaimTypesFiltered = new BehaviorSubject<ClaimTypeDTO[]>(this.dictClaimTypes);*/
      })
    )
  }
  dateChange(range: FormGroup){
    this.filter.dateStart = range.value.dateStart;
    this.filter.dateFinish = range.value.dateFinish;
    this.filterString = this.filterService.getTextFilter(this.filter);
  }
}
