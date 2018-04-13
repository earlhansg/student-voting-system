import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ElectionComponent } from './election.component';
import { ListElectionComponent } from './list-election/list-election.component';
import { NewElectionComponent } from './new-election/new-election.component';

const routes: Routes = [
  { path: '', component: ElectionComponent,
    children: [
      {
            path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
            path: 'list',
            component: ListElectionComponent,
      },
      {
            path:'create',
            component: NewElectionComponent
      }
    ]
  }

];

export const ElectionRouting = RouterModule.forChild(routes);
