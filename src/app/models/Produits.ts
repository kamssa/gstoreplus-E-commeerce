import {SousCategories} from "./SousCategories";

export class Produits {
  constructor(  public id ?: number,
                public version?: number,
                public nom?: string,
                public description ?: string,
                public sousCategories ?: SousCategories) {
  }
}
