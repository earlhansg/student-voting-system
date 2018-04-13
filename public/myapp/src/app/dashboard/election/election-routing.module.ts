import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ElectionComponent } from './election.component';
import { ListElectionComponent } from './list-election/list-election.component';
import { NewElectionComponent } from './new-election/new-election.component';

const routes: Routes = [
  { path: '', component: ElectionComponent,
    children: [
      {
            path: 'create',
            component: NewElectionComponent
      },
      {
            path: 'list',
            component: ListElectionComponent
      }
    ]
  }

];

export const ElectionRouting = RouterModule.forChild(routes);
