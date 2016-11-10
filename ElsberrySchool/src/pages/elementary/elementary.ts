import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalendarTemp} from "../calendar-temp/calendar-temp";
import {Newsletter} from "../newsletter/newsletter";

@Component({
  selector: 'page-elementary',
  templateUrl: 'elementary.html',
})

export class Elementary {

  pages: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //Pages the user can access
    this.pages = {
      Calendar: {component: CalendarTemp, params: {srcType: "Elementary"}},
      Newsletter: {component: Newsletter}
    };

  }

  pageClick(page?): any{
    this.navCtrl.push(this.pages[page].component, this.pages[page].params)
  }


}
