import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { InitializeComponent } from './initialize/initialize.component';

import { UserInitializeResolver } from "./initialize/initialize-resolver";

const routes: Routes = [
  { path: '', loadChildren: './landing/landing.module#LandingModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'vote', loadChildren: './vote/vote.module#VoteModule' },
  { path: 'initialize', component: InitializeComponent, resolve: { user: UserInitializeResolver } }


];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
