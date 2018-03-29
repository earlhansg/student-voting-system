import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { DashboardRouting } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    MdlModule
  ],
  declarations: [
    DashboardComponent,
    CollageComponent
    ]
})
export class DashboardModule { }
