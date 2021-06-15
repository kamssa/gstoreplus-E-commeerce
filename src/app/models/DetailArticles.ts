import {Articles} from "./Articles";

export class DetailArticles {
  constructor( public id ?: number,
               public version?: number,
               public description ?: string,
               public articles?: Articles
  ) {
  }
}
