import { Injectable } from '@angular/core';
import {Panier} from "../models/Panier";
import {Articles} from "../models/Articles";
import {ItemsArticle} from "../models/ItemsArticle";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public  currentPanierName: string = "panier1";
  public paniers: Map<string, Panier> = new Map<string, Panier>();
  constructor() {
    let paniers = localStorage.getItem('myPanier');
    if (paniers){
      this.paniers = JSON.parse(paniers);
    }else {
      let panier = new Panier(this.currentPanierName);
      this.paniers.set(this.currentPanierName, panier);
    }

  }

  public addArticleToPanier(article: Articles){
  let panier = this.paniers.get(this.currentPanierName);
  let itemsArticle: ItemsArticle = panier.items.get(article.id);
  if (itemsArticle){
    itemsArticle.quantity += article.quantity;
  }else {
    itemsArticle = new ItemsArticle();
    itemsArticle.currentPrice = article.prixUnitaire;
    itemsArticle.quantity = article.quantity;
    itemsArticle.articles = article;
    panier.items.set(article.id, itemsArticle);
    // this.savePanier(itemsArticle);
  }
  }
  public savePanier(itemsArticle){
    let panier = this.paniers.get(this.currentPanierName);
    localStorage.setItem('myPanier', JSON.stringify(itemsArticle));
  }
  public getCurrentPanier(): Panier {
   return  this.paniers.get(this.currentPanierName);
  }
  public getTotal(): number{
    let total = 0;
    let items: IterableIterator<ItemsArticle> = this.getCurrentPanier().items.values();
    for (let ia of items){
      total += ia.quantity * ia.currentPrice;
    }
    return total;
  }
}
