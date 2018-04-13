import { Inject, Injectable } from '@angular/core';

import { MdlDatePickerService } from '@angular-mdl/datepicker';
import * as moment from 'moment';

@Injectable()
export class datePickerService {

  public selectedDate: any;
  
  constructor(private datePicker: MdlDatePickerService) {
  }
  public pickADate($event) {
    this.datePicker.selectDate(this.selectedDate, {openFrom: $event}).subscribe( (selectedDate: Date) => {
      this.selectedDate = selectedDate ? moment(selectedDate) : null;
    });
  }

}
