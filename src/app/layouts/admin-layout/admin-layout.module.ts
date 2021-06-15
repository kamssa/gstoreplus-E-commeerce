import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {ComponentsModule} from '../../components/components.module';
import {AdminLayoutComponent} from './admin-layout.component';
import {AccueilComponent} from '../../accueil/accueil.component';
import {AccountComponent} from '../../account/account/account.component';
import {RegistryComponent} from '../../account/registry/registry.component';
import {ConnexionComponent} from '../../account/connexion/connexion.component';
import {MaterialModule} from "../../material/material.module";
import {CategorieComponent} from "../../categorie/categorie/categorie.component";
import {Ng2TelInputModule} from "ng2-tel-input";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        ComponentsModule,
        MaterialModule,
        Ng2TelInputModule,


    ],
  declarations: [
    DashboardComponent,
    AdminLayoutComponent,
    AccueilComponent,
    AccountComponent,
    RegistryComponent,
    ConnexionComponent,
    CategorieComponent
  ]
})

export class AdminLayoutModule {}
