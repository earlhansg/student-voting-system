import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { LandingRouting } from './landing/landing-routing.module';

import { AppRouting } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    LandingRouting,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
