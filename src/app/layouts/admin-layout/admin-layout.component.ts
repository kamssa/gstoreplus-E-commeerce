import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from 'jquery';
import {Location, PopStateEvent} from '@angular/common';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {


  constructor(public location: Location, private router: Router) {
  }

  ngOnInit(): void {
  }

}
