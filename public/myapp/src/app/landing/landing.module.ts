import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingRouting } from './landing-routing.module';

//Component
import { LandingComponent } from './landing.component';

import { AngularFontAwesomeModule } from "angular-font-awesome";


@NgModule({
  imports: [
    CommonModule,
    LandingRouting,
    MdlModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    LandingComponent
  ],
  providers: []
})
export class LandingModule { }
