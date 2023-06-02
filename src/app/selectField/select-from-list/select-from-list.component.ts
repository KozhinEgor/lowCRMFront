import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BaseDictionary} from "../../core/dto/BaseDictionary";

@Component({
  selector: 'app-select-from-list',
  templateUrl: './select-from-list.component.html',
  styleUrls: ['./select-from-list.component.css']
})
export class SelectFromListComponent implements OnInit {

  @Input()
  name:string = '';
  value: BaseDictionary = new BaseDictionary();
  listFiltered!: BehaviorSubject<BaseDictionary[]>;
  listFilters: BaseDictionary[] = [];
  @Output() onChanged = new EventEmitter<BaseDictionary>();

  constructor() { }

  ngOnInit(): void {
  }
  dictClaimStateFilter(e: string) {
    this.listFiltered.next(this.listFilters.filter(x => (x.name || '').toUpperCase().indexOf(e.toUpperCase()) >= 0));
  }

  public setValue(listFiltered: BehaviorSubject<BaseDictionary[]>, listFilters: BaseDictionary[]){
    this.listFiltered = listFiltered;
    this.listFilters = listFilters;
  }

  public getValue(value: BaseDictionary){
    this.onChanged.emit(value);
  }
}
