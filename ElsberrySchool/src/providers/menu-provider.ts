import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the MenuProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MenuProvider {

  MENU_URL = "http://www.elsberryschools.com/menus";
  MENU_SECTION_SELECTOR = "block_content_main"

  constructor(public http: Http) {

  }

  getMenus(): Observable<any>{
    return this.http.get(this.MENU_URL);
  }

  extractMenuPdfs(html){
    //Temp container
    var container = document.createElement("div");
    container.innerHTML = html;

    var menus = [];

    //Get the multi menu section
    var menuSection = container.getElementsByClassName(this.MENU_SECTION_SELECTOR);

    //Set our container to that inner html for traversal
    container.innerHTML = menuSection[0]["innerHTML"];

    //Get all the link. Should only be menus as of 11/7/2016
    var menuLinks = container.getElementsByTagName("a");

    //Extract data and send it off
    [].forEach.call(menuLinks, function(menu){
      menus.push({name: menu["innerText"], href: menu["href"]});
    })

    console.log(menus);

    //Send em off
    return menus;
  }

}
