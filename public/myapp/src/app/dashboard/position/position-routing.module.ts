import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PositionComponent } from './position.component';
import { PositionCollegeComponent } from './position-college/position-college.component';
import { PositionDepartmentComponent } from './position-department/position-department.component';


const routes: Routes = [
  { path: '', component: PositionComponent,
  children: [
    {
          path: '', redirectTo: 'college', pathMatch: 'full'
    },
    {
          path: 'college',
          component: PositionCollegeComponent
    },
    {
          path: 'department',
          component: PositionDepartmentComponent
    }
    ]
  }

];

export const PositionRouting = RouterModule.forChild(routes);
