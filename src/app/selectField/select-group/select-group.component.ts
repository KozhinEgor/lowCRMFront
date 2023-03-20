import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Group} from "../../core/Classes";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ApiService} from "../../service/api.service";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.css']
})
export class SelectGroupComponent implements OnInit {
  @Output() Change = new EventEmitter<Group>();


  myControl = new FormControl();
  options: Group[] = [];
  filteredOptions: Observable<Group[]> | undefined;
  constructor(private api: ApiService, private dialog:MatDialog) {
  }
  public start(groups:Group[]){
      this.options = groups;
      this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' || value === null ? value :value.name ),
            map(groups => groups ? this._filter(groups) : this.options.slice())
          );

  }

  ngOnInit() {

  }

  displayFn(group: Group): string {
    return group && group.name ? group.name : '';
  }


  private _filter(name: string): Group[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
