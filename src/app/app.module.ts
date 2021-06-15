import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapsComponent } from './maps/maps.component';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import { NotificationComponent } from './notification/notification.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { CategorieProduitComponent } from './categorie-produit/categorie-produit.component';
import { CartComponent } from './cart/cart.component';
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {JwtInterceptor} from "./helper/jwt.interceptor";
import {ErrorInterceptor} from "./helper/error.interceptor";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {APP_DATE_FORMATS, AppDateAdapter} from "./helper/format-datepicker";
import {MaterialModule} from "./material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SuccessDialogComponent} from "./service/shared/dialogs/success-dialog/success-dialog.component";
import {ErrorDialogComponent} from "./service/shared/dialogs/error-dialog/error-dialog.component";
import {Ng2TelInputModule} from "ng2-tel-input";
import { ArticleComponent } from './article/article/article.component';
import { DetailArticleComponent } from './article/detail-article/detail-article.component';






@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    NotificationComponent,
    DetailProduitComponent,
    CategorieProduitComponent,
    CartComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    ArticleComponent,
    DetailArticleComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminLayoutModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule


  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
