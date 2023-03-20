import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {SpecDocDto} from "../../core/spec.doc.dto";
import {FilterService} from "../../service/FilterService";
import {MessageSink} from "../../service/message.sink";
import {RequireMatch} from "../../service/RequireMatch";

@Component({
  selector: 'app-spec-doctor',
  templateUrl: './spec-doctor.component.html',
  styleUrls: ['./spec-doctor.component.css']
})
export class SpecDoctorComponent implements OnInit {

  options: SpecDocDto[] = []
  myControl = new FormControl('', [ RequireMatch]);
  filteredOptions: Observable<SpecDocDto[]>;
  constructor(public filterService: FilterService) {
  }
  ngOnInit() {
    this.filterService.getSpecDoc().subscribe( {
      next:(data) =>{this.options = data; this.setFilteredOptions();},
      error:(err) => {this.filterService.setError(err)}
    }
    )

  }
  private setFilteredOptions(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value['name']),
      map(value => (value?this._filter(value):this.options.slice())),
    );
  }
  private _filter(value: string): SpecDocDto[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayWith(obj?: any): string | undefined {
    return obj ? obj.name : undefined;
  }
}
