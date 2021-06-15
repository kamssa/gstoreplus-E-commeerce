import {Categories} from "./Categories";

export class SousCategories {
  constructor(
    public id ?: number,
    public version?: number,
    public nom?: string,
    public categories?: Categories
  ) {
  }
}
