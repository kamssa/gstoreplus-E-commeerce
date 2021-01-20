import { Component, OnInit } from '@angular/core';
import {Categorie} from "../models/Categorie";
import {CategorieService} from "../service/categorie.service";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Shop officiel',  icon: 'dashboard', class: '' },
  { path: '/departement', title: 'festival food',  icon:'person', class: '' },
  { path: '/employe', title: 'Jumia prime',  icon:'person', class: '' },
  { path: '/categorie', title: 'jumia pay',  icon: 'person', class: '' },


];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories: Categorie[];
  menuItems: any[];
  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.categorieService.getAllCategorie().subscribe(data => {
      this.categories = data.body;
    });
  }
}
