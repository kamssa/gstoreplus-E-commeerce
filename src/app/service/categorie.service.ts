import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs";
import {Resultat} from "../models/resultat";
import {environment} from "../../environments/environment.prod";
import {Categories} from "../models/Categories";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  getAllCategorie(): Observable<Resultat<Categories[]>> {
    return this.http.get<Resultat<Categories[]>>(`${environment.apiUrl}/api/categories`);
  }
}
