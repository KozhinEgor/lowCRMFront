import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-data-range',
  templateUrl: './data-range.component.html',
  styleUrls: ['./data-range.component.scss']
})
export class DataRangeComponent {

  @Output() onDatePicked = new EventEmitter<any>();
  range = new FormGroup({
    dateStart: new FormControl(),
    dateFinish: new FormControl()
  });
  getDateStart(): string{
    return this.range.value.dateStart;
  }
  getDateFinish(): string{
    return this.range.value.dateFinish;
  }
  dateStartChange(){
    this.onDatePicked.emit(this.range)
  }

  dateEndChange(){
    this.onDatePicked.emit(this.range)
  }
}
