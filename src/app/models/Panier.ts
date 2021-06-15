import {ItemsArticle} from "./ItemsArticle";
import {Client} from "./Client";

export class Panier {
  public name: string;
  public items: Map<number, ItemsArticle> = new Map();
  public client: Client;
  constructor(name:string)
  {
    this.name = name;
  }

}
