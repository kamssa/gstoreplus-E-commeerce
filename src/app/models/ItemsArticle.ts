import {Articles} from "./Articles";

export class ItemsArticle {
  constructor(
    public articles?: Articles,
    public quantity?: number,
    public currentPrice?: number
    ) {
  }
}
