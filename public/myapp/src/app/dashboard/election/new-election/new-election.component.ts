import { Component, OnInit } from '@angular/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-new-election',
  templateUrl: './new-election.component.html',
  styleUrls: ['./new-election.component.css']
})
export class NewElectionComponent implements OnInit {

  public selectedDate: any;
  constructor(private datePicker: MdlDatePickerService) { }

  ngOnInit() {
  }

  public pickADate($event: MouseEvent) {
    this.datePicker.selectDate(this.selectedDate, {openFrom: $event}).subscribe( (selectedDate: Date) => {
      this.selectedDate = selectedDate ? moment(selectedDate) : null;
    });
  }

}
