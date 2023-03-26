import {Component, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BaseListFilterDto} from "../../core/dto/BaseListFilterDto";

@Component({
  selector: 'app-select-from-list',
  templateUrl: './select-from-list.component.html',
  styleUrls: ['./select-from-list.component.css']
})
export class SelectFromListComponent implements OnInit {

  value: BaseListFilterDto = new BaseListFilterDto();
  listFiltered!: BehaviorSubject<BaseListFilterDto[]>;
  listFilters: BaseListFilterDto[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  dictClaimStateFilter(e: string) {
    this.listFiltered.next(this.listFilters.filter(x => (x.name || '').toUpperCase().indexOf(e.toUpperCase()) >= 0));
  }

  public setValue(listFiltered: BehaviorSubject<BaseListFilterDto[]>, listFilters: BaseListFilterDto[]){
    this.listFiltered = listFiltered;
    this.listFilters = listFilters;
  }

  public getValue(){
    // console.log('changeValue')
  }
}
