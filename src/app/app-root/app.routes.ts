import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { MarketComponent } from '../components/market/market.component';
// import { HeroComponent } from './hero/hero.component';
// export const routes: Routes = [{ path: 'heroes', component: HeroComponent }];
export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'market',
    pathMatch: 'full',
    component: MarketComponent
  },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'market', component: MarketComponent },
];
