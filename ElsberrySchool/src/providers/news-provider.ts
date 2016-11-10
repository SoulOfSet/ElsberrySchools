import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsProvider {

  NEWS_URL = "http://www.elsberryschools.com/";
  NEWS_SECTION_SELECTOR = "content02"

  constructor(public http: Http) {

  }

  getNewsPage(): Observable<any>{
    return this.http.get(this.NEWS_URL);
  }

  extractNews(html){
    //Temp container
    var container = document.createElement("div");
    container.innerHTML = html;

    var newsGroup: any[] = [];

    //Get the multi menu section
    var newsSection = container.getElementsByClassName(this.NEWS_SECTION_SELECTOR);

    //Set our container to that inner html for traversal
    container.innerHTML = newsSection[0]["innerHTML"];

    //Get all the link. Should only be menus as of 11/7/2016
    var newsLinks = container.getElementsByClassName("block_text");

    //Extract data and send it off
    [].forEach.call(newsLinks, function(news){
      newsGroup.push(news['innerHTML']);
    })

    return newsGroup;
  }

}
