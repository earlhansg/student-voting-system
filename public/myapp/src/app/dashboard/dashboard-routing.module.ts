
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';
import { DepartmentComponent } from './department/department.component';
import { OfficerComponent } from './officer/officer.component';
import { RegisterComponent } from './officer/register/register.component';

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
      }
      
    ]
  }

];

export const DashboardRouting = RouterModule.forChild(routes);
