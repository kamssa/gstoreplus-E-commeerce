import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {AccueilComponent} from '../../accueil/accueil.component';
import {AccountComponent} from '../../account/account/account.component';


export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'account', component: AccountComponent }

];
