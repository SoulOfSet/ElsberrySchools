import {PdfView} from "../pdf-view/pdf-view";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BusRouteProvider} from "../../providers/bus-routes-provider";
import {Home} from "../home/home";

/*
  Generated class for the BusRoutes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bus-routes',
  templateUrl: 'bus-routes.html',
  providers: [BusRouteProvider]
})
export class BusRoutes {

  routes: any;

  constructor(public navCtrl: NavController, private busRouteProvider: BusRouteProvider) {

  }

  ionViewDidLoad() {
    this.busRouteProvider.getRoutePage().subscribe(
      data => {
        if(data["status"] == 200){
          this.routes = this.busRouteProvider.filterBusRouteLink(data["_body"]);
        }

      },
      err => {
        console.log("An error occurred getting the bus routes page");
        console.log(err);
        this.navCtrl.push(Home);
      },
      () => console.log("Done")
    );
  }

  routeClick(route){
    this.navCtrl.push(PdfView, route);
  }

}
