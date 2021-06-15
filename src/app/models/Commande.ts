import {Client} from "./Client";
import {ItemsArticle} from "./ItemsArticle";

export class Commande {
  constructor(
    public id?: number,
    public version?: number,
    public client?: Client,
    public articles?: ItemsArticle[],
    public totalAmount?: number,
    public date?: Date
  ) {
  }
}
