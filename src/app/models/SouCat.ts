import {SousCategories} from "./SousCategories";

export class SouCat {
  constructor(
    public items: Map<number, SousCategories[]> = new Map<number, SousCategories[]>()
  ) {
  }
}
