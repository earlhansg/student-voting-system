
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';
import { DepartmentComponent } from './department/department.component';
import { OfficerComponent } from './officer/officer.component';
import { RegisterComponent } from './officer/register/register.component';
import { StudentComponent } from './student/student.component';
import { TallyComponent } from './tally/tally.component';

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
            component: TallyComponent
      }

    ]
  }

];

export const DashboardRouting = RouterModule.forChild(routes);
