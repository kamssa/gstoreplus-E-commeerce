import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MaterialModule} from "../material/material.module";
import { BandeAlerteComponent } from './bande-alerte/bande-alerte.component';
import { BannerComponent } from './banner/banner.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    BandeAlerteComponent,
    BannerComponent,

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    BandeAlerteComponent
  ]
})
export class ComponentsModule { }
