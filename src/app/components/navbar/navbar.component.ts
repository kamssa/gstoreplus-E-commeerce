import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {CategorieService} from "../../service/categorie.service";
import {Categories} from "../../models/Categories";
import {SousCategoriesService} from "../../service/sous-categories.service";
import {ProduitService} from "../../service/produit.service";
import {SousCategories} from "../../models/SousCategories";
import {Produits} from "../../models/Produits";
import {PanierService} from "../../service/panier.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;
  connexion = false;
  categories: Categories[];
  categorie: Categories;
  sousCategories: SousCategories[];
  menuItems: any[];
  produits: Produits[];
  produit: Produits;

  constructor(location: Location,
              private element: ElementRef,
              private router: Router,
              private categorieService: CategorieService,
              private sousCategoriesService: SousCategoriesService,
              private produitService: ProduitService,
              public panierService: PanierService) {

    this.location = location;
    this.sidebarVisible = false;

  }

  ngOnInit() {
    window.addEventListener('scroll', this.myFunction);
    this.categorieService.getAllCategorie().subscribe(data => {
      this.categories = data.body;
    });

    console.log(this.categorie);
  }


   myFunction() {
     var sticky = navbar.offsetTop;
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }


  onId(id: number) {
    console.log('Voir result', id);
    this.produitService.getProduitByIdCategorie(id).subscribe(data => {
      this.produits = data.body;
      console.log('Voir les produits de la sous categorie', this.produits);
    });
  }

  onSelect(p: Produits): void{
    console.log('Valeur de produit select', p);
    this.router.navigate(['produit', p.id]);
  }
}
