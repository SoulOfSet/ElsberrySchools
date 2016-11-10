import {Menu} from "../pages/menu/menu";
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Elementary } from '../pages/elementary/elementary';
import {Middle} from "../pages/middle/middle";
import {High} from "../pages/high/high";
import {BusRoutes} from "../pages/bus-routes/bus-routes";

@Component({
  templateUrl: 'app.html'
})

export class ElsberrySchools {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: any;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = {
      Elementary: {component: Elementary},
      Middle: {component: Middle},
      High: {component: High},
      Home: {component: Home},
      BusRoutes: {component: BusRoutes},
      Menus: {component: Menu}
    }



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    page = page.replace(/\s+/g, '');

    this.nav.setRoot(this.pages[page].component);

  }
}
