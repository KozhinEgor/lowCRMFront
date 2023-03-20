import { Component, OnInit } from '@angular/core';
import {SpecDocDto} from "../../core/spec.doc.dto";
import {FormControl} from "@angular/forms";
import {RequireMatch} from "../../service/RequireMatch";
import {map, Observable, startWith} from "rxjs";
import {FilterService} from "../../service/FilterService";
import {DocDto} from "../../core/doc.dto";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  options: DocDto[] = []
  myControl = new FormControl('', [ RequireMatch]);
  filteredOptions: Observable<DocDto[]>;
  constructor(public filterService: FilterService) {
  }
  ngOnInit() {
    this.filterService.getDoc().subscribe( {
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
  private _filter(value: string): DocDto[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayWith(obj?: any): string | undefined {
    return obj ? obj.name : undefined;
  }
}
