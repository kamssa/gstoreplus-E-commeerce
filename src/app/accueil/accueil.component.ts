import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../service/categorie.service';
import {ProduitService} from '../service/produit.service';
import {Produits} from '../models/Produits';
import {SousCategories} from '../models/SousCategories';
import {Categories} from '../models/Categories';
import {SousCategoriesService} from '../service/sous-categories.service';
import {Router} from "@angular/router";
import {SouCat} from "../models/SouCat";
import {Panier} from "../models/Panier";


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Shop officiel',  icon: 'dashboard', class: '' },
  { path: '/departement', title: 'festival food',  icon: 'person', class: '' },
  { path: '/employe', title: 'Jumia prime',  icon: 'person', class: '' },
  { path: '/categorie', title: 'jumia pay',  icon: 'person', class: '' },
];
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  categories: Categories[];
  categorie: Categories;
  menuItems: any[];
  produit: Produits;
  sousCategories: SousCategories[];
  public sousCat: Map<number, SousCategories[]> = new Map<number, SousCategories[]>();

  constructor(public categorieService: CategorieService,
              public sousCategoriesService: SousCategoriesService,
              public produitService: ProduitService,
              private router: Router) { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.categorieService.getAllCategorie().subscribe(data => {
      this.categories = data.body;
      console.log('Voir les categories', data.body);
      this.categories.forEach(value => {
        this.categorie = value;
        console.log(this.categorie);
        this.sousCategoriesService.getSousCategorieByIdCategorie(this.categorie.id)
          .subscribe(result => {
            this.sousCategories = result.body;
            console.log(result.body);
            let souCat = this.sousCat.set(this.categorie.id, this.sousCategories);
            console.log('Map', souCat);
          });
      });
    });
  }
}
