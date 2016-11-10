import {PdfView} from "../pdf-view/pdf-view";
import {Home} from "../home/home";
import {MenuProvider} from "../../providers/menu-provider";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [MenuProvider]
})

export class Menu {

  menus = [];

  constructor(public navCtrl: NavController, private menuProvider: MenuProvider) {

  }

  ionViewDidLoad() {
    this.menuProvider.getMenus().subscribe(
      data => {
        if(data["status"] == 200){
          this.menus = this.menuProvider.extractMenuPdfs(data["_body"]);
        }
      },
      err => {
        console.log("An error occurred getting the menus page");
        console.log(err);
        this.navCtrl.push(Home);
      },
      () => console.log("Done")
    );
  }

  menuClick(menu){
    this.navCtrl.push(PdfView, menu)
  }


}
