import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { LandingRouting } from './landing-routing.module';

import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRouting,
    MdlModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule { }
