import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routing
import { LandingRouting } from './landing-routing.module';

//Service
import { LandingService } from './landing.service';

//Component
import { LandingComponent } from './landing.component';
import { AlertMessageComponent } from '../shared/component/alert-message/alert-message.component';

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
    LandingComponent,
    AlertMessageComponent
  ],
  providers: [
    LandingService,
    { provide: "API_URL", useValue: "http://localhost:3000" }
  ]
})
export class LandingModule { }
