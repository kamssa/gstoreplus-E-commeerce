import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs";
import {Resultat} from "../models/resultat";
import {Articles} from "../models/Articles";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  getAllArticle(): Observable<Resultat<Articles[]>> {
    return this.http.get<Resultat<Articles[]>>(`${environment.apiUrl}/api/article`);
  }


  getArticlesByIdProduits(id: number): Observable<Resultat<Articles[]>> {
    return this.http.get<Resultat<Articles[]>>(`${environment.apiUrl}/api/articleByIdProduit/${id}`);
  }
  getArticlesById(id: number): Observable<Resultat<Articles>> {
    return this.http.get<Resultat<Articles>>(`${environment.apiUrl}/api/article/${id}`);
  }
  getArticlesByNom(libelle: string): Observable<Resultat<Articles>> {
    return this.http.get<Resultat<Articles>>(`${environment.apiUrl}/api/getdocumentByLibelle/${libelle}`);
  }
}
