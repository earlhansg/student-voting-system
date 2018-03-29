
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CollageComponent } from './collage/collage.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      {
            path: 'college',
            component: CollageComponent
      }
    ]
  }

];

export const DashboardRouting = RouterModule.forChild(routes);
