import { Component, OnInit } from '@angular/core';
import {PanierService} from "../service/panier.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public panierService: PanierService) { }

  ngOnInit(): void {
  }

}
