import {ProduitService} from "../service/produit.service";
import {Produits} from "./Produits";

export class Articles {
  constructor( public id ?: number,
               public version?: number,
               public code?: string,
               public nom?: string,
               public description ?: string,
               public promotion?: boolean,
               public selected?: boolean,
               public available?: boolean,
               private nouveau?: boolean,
               public prixUnitaire?: number,
               public imagePath?: string,
               public quantity?: number,
               public produits?: Produits
  ) {
  }
}
