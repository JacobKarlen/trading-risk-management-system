import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';

import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { TradesPageComponent } from './modules/trades/pages/trades-page/trades-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'trades', component: TradesPageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
