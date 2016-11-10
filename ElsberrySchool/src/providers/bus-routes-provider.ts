import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the BusRoutes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BusRouteProvider {

  //R.I.P me if these endpoints change
  BUS_ROUTE_URL = "http://www.elsberryschools.com/busroutes";
  BUS_ROUTE_TABLE_SELECTOR = "#container_content > div.content_margin > div.block_content_main > div > div > div.block_text > table > tbody > tr > td:nth-child(1) > p";

  static get parameters(){
    return [[Http]];
  }

  constructor(public http: Http) {
  }

  //Returns promise for downloaded bus route page
  getRoutePage(): Observable<any>{
    return this.http.get(this.BUS_ROUTE_URL);
  }

  filterBusRouteLink(html){

    var routesObject = [];

    //Temp container
    var container = document.createElement("div");
    container.innerHTML = html;

    //Get route table
    var busRouteTable = container.querySelectorAll(this.BUS_ROUTE_TABLE_SELECTOR);

    //Extract bus names and pdf links
    [].forEach.call(busRouteTable, function(p){
      var link = p.getElementsByTagName("a");
      if(link["length"] > 0){
        //We don't need the one with the e-mail
        if(!link[0]['href'].includes("mailto")){
          routesObject.push({name: link[0]['innerText'], href: link[0]['href']});
        }
      }
    });

    return routesObject;

  }


}
