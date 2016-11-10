import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the BusRouteView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pdf-view',
  templateUrl: 'pdf-view.html'
})

export class PdfView {

  name: any;
  pdfSrc: any;
  pdfZoom: any;


  constructor(public navCtrl: NavController, public params: NavParams) {
    this.name = params["data"]["name"];
    this.pdfSrc = params["data"]["href"];
    this.pdfZoom = "1.5";
  }

  ionViewDidLoad() {

  }

  zoom(type){
    if(type == "add"){
      this.pdfZoom = (parseFloat(this.pdfZoom) + 0.2).toString();
    }
    else if(type == "minus"){
      this.pdfZoom = (parseFloat(this.pdfZoom) - 0.2).toString();
    }
  }

}
