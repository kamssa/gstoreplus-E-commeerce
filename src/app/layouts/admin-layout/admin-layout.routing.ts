import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {AccueilComponent} from '../../accueil/accueil.component';
import {AccountComponent} from '../../account/account/account.component';
import { DetailProduitComponent } from '../../detail-produit/detail-produit.component';
import { CategorieProduitComponent } from '../../categorie-produit/categorie-produit.component';
import { CartComponent } from '../../cart/cart.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {AuthGuardService} from '../../helper/auth-guard.service';
import {ArticleComponent} from "../../article/article/article.component";
import {DetailArticleComponent} from "../../article/detail-article/detail-article.component";


export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'detail', component: DetailProduitComponent },
  { path: 'produit-par-categorie', component: CategorieProduitComponent },
  { path: 'mon-panier',
   // canActivate: [AuthGuardService],
    component: CartComponent
  },
  { path: 'mon-espace',
    canActivate: [AuthGuardService],
    component:  UserProfileComponent },
  { path: 'account',
    component: AccountComponent },
  {path: 'produit/:id' , component: ArticleComponent,},
  {path: 'detail/:id', component: DetailArticleComponent}
];
