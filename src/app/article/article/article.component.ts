import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Articles} from "../../models/Articles";
import {switchMap} from "rxjs/operators";
import {ProduitService} from "../../service/produit.service";
import {Produits} from "../../models/Produits";
import {SousCategoriesService} from "../../service/sous-categories.service";
import {SousCategories} from "../../models/SousCategories";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
articles: Articles[];
article: Articles;
produit: Produits;
sousCategorie: SousCategories;
articleId: number;
  constructor(private articleService: ArticleService,
              private  produitService: ProduitService,
              private route: ActivatedRoute,
              private router: Router, private sousCategoriesService: SousCategoriesService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.articleService.getArticlesByIdProduits(+params.get('id')))
    ).subscribe(result => {
      this.articles = result.body;
      console.log('Voir les articles ramené', this.articles);
    });
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.produitService.getProduitById(+params.get('id')))
    ).subscribe(result => {
      this.produit = result.body;
      console.log('Voir le produits ramené', this.produit);
    });
    this.sousCategoriesService.getSousCategoriesById(this.produit.sousCategories.id)
    .subscribe(result => {
      this.sousCategorie = result.body;
      console.log('Voir le sous categorie ramené', this.sousCategorie);
    });
  }

  onDetail(a: Articles): void{
    console.log('voir id article', a);
    this.router.navigate(['produit/id', a.id]);
  }
}
