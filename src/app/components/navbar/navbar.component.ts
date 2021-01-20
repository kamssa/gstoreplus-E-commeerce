import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;


  constructor(location: Location,  private element: ElementRef, private router: Router) {

    this.location = location;
    this.sidebarVisible = false;

  }

  ngOnInit() {
    window.addEventListener('scroll', this.myFunction);

  }


   myFunction() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }


}
