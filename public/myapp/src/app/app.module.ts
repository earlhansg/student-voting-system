import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';

//routing
import { AppRouting } from './app-routing.module';

//service
// import { ConfigService } from './shared/services/config.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    AppRouting
  ],
  providers: [
    // ConfigService,
    // { provide: 'API_URL', useValue: 'http://localhost:3000' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
