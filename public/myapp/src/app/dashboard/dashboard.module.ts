import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlPopoverModule } from '@angular-mdl/popover';

import { DashboardRouting } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';
import { DepartmentComponent } from './department/department.component';
import { OfficerComponent } from './officer/officer.component';
import { RegisterComponent } from './officer/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule
  ],
  declarations: [
    DashboardComponent,
    CollageComponent,
    DepartmentComponent,
    OfficerComponent,
    RegisterComponent
    ]
})
export class DashboardModule { }
