import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';
import { DepartmentComponent } from './department/department.component';
import { OfficerComponent } from './officer/officer.component';
import { RegisterComponent } from './officer/register/register.component';
import { StudentComponent } from './student/student.component';
import { TallyComponent } from './tally/tally.component';
import { TallyCollegeComponent } from './tally/tally-college/tally-college.component';
import { ElectionComponent } from './election/election.component';
import { TallyDepartmentComponent } from './tally/tally-department/tally-department.component';
import { NewElectionComponent } from './election/new-election/new-election.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      {
            path: 'college',
            component: CollageComponent
      },
      {
            path: 'department',
            component: DepartmentComponent
      },
      {
            path: 'officer',
            component: OfficerComponent,
            children:[
              {
                path:'register',
                component: RegisterComponent
              }
            ]
      },
      {
            path: 'student',
            component: StudentComponent
      },
      {
            path: 'tally',
            component: TallyComponent,
            children:[
              {
                path:'college',
                component: TallyCollegeComponent
              },
              {
                path:'department',
                component: TallyDepartmentComponent
              }
            ]
      },
      {
            path: 'election',
            loadChildren: './election/election.module#ElectionModule'
      }
    ]

  }
  
];

export const DashboardRouting = RouterModule.forChild(routes);
