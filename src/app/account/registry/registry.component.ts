import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../models/Client";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  butttonPrev: any;
  registryForm: FormGroup;
  checkbox = false;
  private dialogConfig;
  client: Client;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  error = '';
  code: any;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registryForm = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
    });

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registryForm.controls[controlName].hasError(errorName);
  }
  onSubmit() {
    if (this.checkbox === true){
      console.log(this.registryForm.value);
        let  client: Client = {
     nom: this.registryForm.value.nom,
     prenom: this.registryForm.value.prenom,
     email: this.registryForm.value.email,
     codePays: this.code,
     telephone: this.registryForm.value.telephone,
     password: this.registryForm.value.password,
     type:'CL'
   };
   console.log('voir membre', client);
   this.clientService.getClientByEmail(client.email).subscribe(data => {
         console.log(data);
         if(data.body === true){
           this.clientService.registraction(client).subscribe(resultat => {
             if (resultat) {
               this.client = resultat.body;
               this.snackBar.open(' Merci pour votre inscription!', '', {
                 duration: 5000,
                 horizontalPosition: this.horizontalPosition,
                 verticalPosition: this.verticalPosition,

               });
             }

           });
           this.router.navigate(['accueil']);
     }else {
       this.error = "cet email est déjà utilisé";
     }
   });
    }else {
      console.log("le checkbox n'est pas coché");
    }


  }

  onCountryChange(event: any) {
    console.log(event);
    this.code = event.dialCode;
    console.log(this.code);
  }

  fieldsChange(ev) {
    console.log(ev.currentTarget.checked);
    this.checkbox = ev.currentTarget.checked;
  }
}
