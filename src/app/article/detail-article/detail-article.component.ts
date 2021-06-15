import { Component, OnInit } from '@angular/core';
import {Articles} from "../../models/Articles";
import {ArticleService} from "../../service/article.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {DetailArticles} from "../../models/DetailArticles";
import {DetailAticlesService} from "../../service/detail-aticles.service";
import {ImageDetail} from "../../models/ImageDetail";
import {PanierService} from "../../service/panier.service";

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {
  detailArticles: DetailArticles[];
  detailArticle: DetailArticles;
  imageDetails: ImageDetail[];
  articleId: number;

  constructor(private detailAticlesService: DetailAticlesService,
              private route: ActivatedRoute,
              private router: Router, public panierService: PanierService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.detailAticlesService.getDetailArticlesByIdArticle(+params.get('id')))
    ).subscribe(result => {
      if (result.status === 0){
        this.detailArticle = result.body;
        this.detailAticlesService.getImageDetailArticlesByIdDetailArticle(this.detailArticle.id)
         .subscribe(data => {
           this.imageDetails = data.body;
           console.log('Voir image detail', this.imageDetails);
         });
        console.log('Voir les detail articles ramené', this.detailArticle);
      }else {
        console.log('valeur null');
      }

    });
  }



  onAddArticleToPanier(a: any) {
  }

  onAddProductToCaddy(p: any) {
    console.log(p);
    this.panierService.addArticleToPanier(p);

  }
}
