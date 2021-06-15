import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs";
import {Resultat} from "../models/resultat";
import {Articles} from "../models/Articles";
import {environment} from "../../environments/environment.prod";
import {DetailArticles} from "../models/DetailArticles";
import {ImageDetail} from "../models/ImageDetail";

@Injectable({
  providedIn: 'root'
})
export class DetailAticlesService {

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  getAllDetailArticle(): Observable<Resultat<Articles[]>> {
    return this.http.get<Resultat<Articles[]>>(`${environment.apiUrl}/api/detailArticles`);
  }


  getDetailArticlesByIdArticle(id: number): Observable<Resultat<DetailArticles>> {
    return this.http.get<Resultat<DetailArticles>>(`${environment.apiUrl}/api/detailArticleByIdArticle/${id}`);
  }
  getDetailArticlesById(id: number): Observable<Resultat<Articles>> {
    return this.http.get<Resultat<Articles>>(`${environment.apiUrl}/api/detailArticles/${id}`);
  }
  getImageDetailArticlesByIdDetailArticle(id: number): Observable<Resultat<ImageDetail[]>> {
    return this.http.get<Resultat<ImageDetail[]>>(`${environment.apiUrl}/api/image/${id}`);
  }
}
