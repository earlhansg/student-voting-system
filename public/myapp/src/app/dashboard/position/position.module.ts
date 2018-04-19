import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlPopoverModule } from '@angular-mdl/popover';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';

import { PositionRouting } from './position-routing.module';

import { PositionComponent } from './position.component';
import { PositionCollegeComponent } from './position-college/position-college.component';


@NgModule({
  imports: [
    CommonModule,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule,
    MdlDatePickerModule,
    PositionRouting
  ],
  declarations: [
    PositionComponent,
    PositionCollegeComponent
    ]
})
export class PositionModule { }
