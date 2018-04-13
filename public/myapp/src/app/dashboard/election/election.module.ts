import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlPopoverModule } from '@angular-mdl/popover';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';

import { ElectionRouting } from './election-routing.module';

import { ElectionComponent } from './election.component';
import { ListElectionComponent } from './list-election/list-election.component';
import { NewElectionComponent } from './new-election/new-election.component';


@NgModule({
  imports: [
    CommonModule,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule,
    MdlDatePickerModule,
    ElectionRouting
  ],
  declarations: [
    ElectionComponent,
    ListElectionComponent,
    NewElectionComponent
    ]
})
export class ElectionModule { }
