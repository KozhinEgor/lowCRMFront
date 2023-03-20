import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FilterDto} from "../../../core/filter.dto";
import {FilterService} from "../../../service/FilterService";

@Component({
  selector: 'app-total-doc-rep',
  templateUrl: './total-doc-rep.component.html',
  styleUrls: ['./total-doc-rep.component.css']
})
export class TotalDocRepComponent implements OnInit {
  panelOpenState = true;
  filter: FilterDto = new FilterDto();
  filterString ='';
  constructor( public filterService:FilterService) { }

  ngOnInit(): void {
  }
  dateChange(range: FormGroup){
    this.filter.dateStart = range.value.dateStart;
    this.filter.dateFinish = range.value.dateFinish;
    this.filterString = this.filterService.getTextFilter(this.filter);
  }
}
