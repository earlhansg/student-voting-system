import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { DashboardRouting } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';
import { DepartmentComponent } from './department/department.component';
import { OfficerComponent } from './officer/officer.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    MdlModule
  ],
  declarations: [
    DashboardComponent,
    CollageComponent,
    DepartmentComponent,
    OfficerComponent
    ]
})
export class DashboardModule { }
