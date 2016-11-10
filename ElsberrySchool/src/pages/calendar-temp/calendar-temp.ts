import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {sanitizeUrl} from "@angular/platform-browser/src/security/url_sanitizer";

/*
  Generated class for the CalendarTemp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendar-temp',
  templateUrl: 'calendar-temp.html',
})
export class CalendarTemp {

  sources: any;
  srcType: string;


  constructor(public navCtrl: NavController, public params: NavParams) {
    this.srcType = params.data.srcType;
  }

  ionViewDidLoad() {

  }

}
