import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { HttpClientModule } from "@angular/common/http";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from './app.component';
import { InitializeComponent } from './initialize/initialize.component';

//Services
import { AuthService } from "./auth.service";
import { UserInitializeResolver } from "./initialize/initialize-resolver";

//routing
import { AppRouting } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    InitializeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MdlModule,
    AppRouting,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthService,
    UserInitializeResolver,
    { provide: "API_URL", useValue: "http://localhost:3000" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
