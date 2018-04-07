
import { RouterModule, Routes } from '@angular/router';

import { VoteComponent } from './vote.component';

const routes: Routes = [
  { path: '', component: VoteComponent }
];

export const VoteRouting = RouterModule.forChild(routes);
