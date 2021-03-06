import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { HttpClientModule } from "@angular/common/http";


import { MdlSelectModule } from '@angular-mdl/select';
import { MdlPopoverModule } from '@angular-mdl/popover';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';

import { DashboardRouting } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';
import { DepartmentComponent } from './department/department.component';
import { OfficerComponent } from './officer/officer.component';
import { RegisterComponent } from './officer/register/register.component';
import { StudentComponent } from './student/student.component';
import { TallyComponent } from './tally/tally.component';
import { TallyCollegeComponent } from './tally/tally-college/tally-college.component';
import { TallyDepartmentComponent } from './tally/tally-department/tally-department.component';



@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule,
    MdlDatePickerModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    CollageComponent,
    DepartmentComponent,
    OfficerComponent,
    RegisterComponent,
    StudentComponent,
    TallyComponent,
    TallyCollegeComponent,
    TallyDepartmentComponent
  ],
  providers: []
})
export class DashboardModule { }
