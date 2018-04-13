import { Component, OnInit } from '@angular/core';

import { datePickerService } from '../../shared/datePicker.service';

@Component({
  selector: 'app-new-election',
  templateUrl: './new-election.component.html',
  styleUrls: ['./new-election.component.css'],
  providers: [datePickerService]
})
export class NewElectionComponent implements OnInit {

  public selectedDate: any;
  constructor(private dateService: datePickerService) { }

  ngOnInit() {
  }

  pickADate($event: MouseEvent) {
    this.dateService.pickADate($event);
  }

}
