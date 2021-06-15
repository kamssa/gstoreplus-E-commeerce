import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {environment} from '../../environments/environment.prod';
import {Resultat} from '../models/resultat';
import {SousCategories} from '../models/SousCategories';
import {Produits} from "../models/Produits";

@Injectable({
  providedIn: 'root'
})
export class SousCategoriesService {
  private sousCategoriesCreerSource = new Subject<Resultat<SousCategories>>();
  private sousCategoriesModifSource = new Subject<Resultat<Document>>();
  private sousCategoriesFiltreSource = new Subject<string>();
  private sousCategoriesSupprimeSource = new Subject<Resultat<boolean>>();


// observables streams
  travauxCreer$ = this.sousCategoriesCreerSource.asObservable();
  travauxModif$ = this.sousCategoriesModifSource.asObservable();
  travauxFiltre$ = this.sousCategoriesFiltreSource.asObservable();
  travauxSupprime$ = this.sousCategoriesSupprimeSource.asObservable();

  constructor(private  http: HttpClient, private messageService: MessageService) {
  }

  getAllSousCategories(): Observable<Resultat<SousCategories[]>> {
    return this.http.get<Resultat<SousCategories[]>>(`${environment.apiUrl}/api/sousCategories`);
  }

  ajoutSousCategories(categorie: SousCategories): Observable<Resultat<SousCategories>> {
    console.log('methode du service qui ajoute  categorie', categorie);
    return this.http.post<Resultat<SousCategories>>(`${environment.apiUrl}/api/sousCategories`, categorie);
  }
  modifSousCategories(categorie: SousCategories): Observable<Resultat<SousCategories>> {
    console.log('methode du service qui modifier sous  categorie', categorie);
    return this.http.put<Resultat<SousCategories>>(`${environment.apiUrl}/api/sousCategories`, categorie);
  }
  getSousCategoriesById(id: number): Observable<Resultat<SousCategories>> {
    return this.http.get<Resultat<SousCategories>>(`${environment.apiUrl}/api/sousCategories/${id}`);
  }
  getSousCategoriesByNom(nom: string): Observable<Resultat<SousCategories>> {
    return this.http.get<Resultat<SousCategories>>(`${environment.apiUrl}/api/getCategoriesByNom/${nom}`);
  }
  getSousCategorieByIdCategorie(id: number): Observable<Resultat<Produits[]>> {
    return this.http.get<Resultat<Produits[]>>(`${environment.apiUrl}/api/sousCategorieByIdCategorie/${id}`);
  }
  supprimerSousCategories(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/categories/${id}`);

  }
  private log(message: string) {
    this.messageService.add('categorieService: ' + message);

  }

  ///////////////////////////////////////////
  // recuper les erreurs


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error);


      this.log(`${operation} non disponible: ${error.message}`);


      return of(result as T);
    };
  }
}
