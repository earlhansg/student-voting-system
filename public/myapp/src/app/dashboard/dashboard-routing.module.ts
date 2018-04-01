
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';
import { DepartmentComponent } from './department/department.component';
import { OfficerComponent } from './officer/officer.component';

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
            component: OfficerComponent
      }
    ]
  }

];

export const DashboardRouting = RouterModule.forChild(routes);
