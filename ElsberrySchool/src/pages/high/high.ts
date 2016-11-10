import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CalendarTemp} from "../calendar-temp/calendar-temp";

/*
  Generated class for the High page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-high',
  templateUrl: 'high.html'
})
export class High {

  pages: any;


  constructor(public navCtrl: NavController) {

    //Pages the user can access
    this.pages = {
      Calendar: {component: CalendarTemp, params: {srcType: "High"}},
    };

  }

  pageClick(page){
    this.navCtrl.push(this.pages[page].component, this.pages[page].params)
  }

}
