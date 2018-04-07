import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { VoteRouting } from './vote-routing.module';

import { VoteComponent } from './vote.component';

@NgModule({
  imports: [
    CommonModule,
    VoteRouting,
    MdlModule
  ],
  declarations: [
    VoteComponent
  ]
})
export class VoteModule { }
