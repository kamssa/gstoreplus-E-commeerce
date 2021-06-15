import { Component, OnInit } from '@angular/core';
import {ROUTES} from "../../accueil/accueil.component";
import {Categories} from "../../models/Categories";
import {CategorieService} from "../../service/categorie.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categories: Categories[];
  menuItems: any[];
  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.categorieService.getAllCategorie().subscribe(data => {
      console.log('Voir les catégories', data.body);
      this.categories = data.body;
    });
  }

}
