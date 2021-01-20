import { Component, OnInit } from '@angular/core';
import {Categorie} from "../../models/Categorie";
import {CategorieService} from "../../service/categorie.service";
import {ROUTES} from "../../accueil/accueil.component";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
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
