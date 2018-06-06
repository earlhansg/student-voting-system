import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { InitializeComponent } from './initialize/initialize.component';

import { AuthGuardService } from './auth/auth-guard.service';

import { UserInitializeResolver } from "./initialize/initialize-resolver";

const routes: Routes = [
  { path: '', loadChildren: './landing/landing.module#LandingModule', canActivate: [AuthGuardService] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuardService] },
  { path: 'vote', loadChildren: './vote/vote.module#VoteModule', canActivate: [AuthGuardService] },
  { path: 'initialize', component: InitializeComponent, resolve: { user: UserInitializeResolver }, canActivate: [AuthGuardService] }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
