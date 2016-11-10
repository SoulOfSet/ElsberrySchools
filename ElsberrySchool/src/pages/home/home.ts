import {NewsProvider} from "../../providers/news-provider";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NewsProvider]
})
export class Home {

  news: any[] = [];

  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) {

  }

  ionViewDidLoad() {
    this.newsProvider.getNewsPage().subscribe(
      data => {
        if(data["status"] == 200){
          this.news = this.newsProvider.extractNews(data["_body"]);
          console.log(this.news);
        }
      },
      err => {
        console.log("An error occurred getting the news page");
        console.log(err);
      },
      () => console.log("Done")
    );
  }

}
