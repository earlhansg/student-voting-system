import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LandingRouting } from './landing-routing.module';

//Component
import { LandingComponent } from './landing.component';

//Services
import { LandingService } from './landing.service';

@NgModule({
  imports: [
    CommonModule,
    LandingRouting,
    MdlModule,
    HttpModule,
    HttpClientModule,
  ],
  declarations: [
    LandingComponent
  ],
  providers: [
    LandingService
  ]
})
export class LandingModule { }
