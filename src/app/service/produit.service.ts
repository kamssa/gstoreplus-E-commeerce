import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs";
import {Resultat} from "../models/resultat";
import {Produits} from "../models/Produits";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  getAllProduit(): Observable<Resultat<Produits[]>> {
    return this.http.get<Resultat<Produits[]>>(`${environment.apiUrl}/api/produit`);
  }
  getProduitByIdCategorie(id: number): Observable<Resultat<Produits[]>> {
    return this.http.get<Resultat<Produits[]>>(`${environment.apiUrl}/api/produitByIdCategorie/${id}`);
  }
  getProduitById(id: number): Observable<Resultat<Produits>> {
    return this.http.get<Resultat<Produits>>(`${environment.apiUrl}/api/produit/${id}`);
  }
}
