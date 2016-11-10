import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CalendarTemp} from "../calendar-temp/calendar-temp";

/*
  Generated class for the Middle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-middle',
  templateUrl: 'middle.html'
})
export class Middle {

  pages: any;


  constructor(public navCtrl: NavController) {

    //Pages the user can access
    this.pages = {
      Calendar: {component: CalendarTemp, params: {srcType: "Middle"}},
    };

  }

  pageClick(page): any{
    this.navCtrl.push(this.pages[page].component, this.pages[page].params)
  }

}
