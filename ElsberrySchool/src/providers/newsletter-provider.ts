import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the BusRoutes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class NewsletterProvider {


  //R.I.P me if these endpoints change
  NEWSLETTER_URL = "http://www.cce.elsberryschools.com/";
  NEWSLETTER_NEW_LINK_SELECTOR = "publish_title";
  NEWSLETTER_TEACHERS_SELECTOR = "published";

  static get parameters(){
    return [[Http]];
  }

  constructor(public http: Http) {
  }

  //Returns promise for downloaded bus route page
  getCCEHome(): Observable<any>{
    return this.http.get(this.NEWSLETTER_URL);
  }

  extractNewsletterHtml(html): Observable<any>{
    //Temp container
    var container = document.createElement("div");
    container.innerHTML = html;

    //Get the newsletter post
    var newsletterPosts = container.getElementsByClassName(this.NEWSLETTER_NEW_LINK_SELECTOR);

    //We only want the newest one
    container.innerHTML = newsletterPosts[0].innerHTML;

    //Get the href object
    var ahref = container.getElementsByTagName("a");

    //We just need the end part. Not what it resolves the address to
    var preLink = ahref[0]["href"];
    var link = preLink.substr(preLink.indexOf("news"), preLink.length);

    //Return the promise for that particule html page
    return this.http.get(this.NEWSLETTER_URL + link);  // <-----auto generated cms trash added on for school loop :)

  }

  public extractTeachers(html){

    //The teacher array of objects to return
    var teacherObject = [{
      title: [],
      teachers: []
    }];

    //Temp container
    var container = document.createElement("div");
    container.innerHTML = html;

    //Get just the part we need
    var allNewsletters = container.getElementsByClassName(this.NEWSLETTER_TEACHERS_SELECTOR);

    //We need the inner html of that so we can scope it down
    container.innerHTML = allNewsletters[0]["innerHTML"];

    //Get the ones with links. Only ones we want
    var links = container.getElementsByTagName("a");

    //Add the links to our object
    [].forEach.call(links, function(link){
      teacherObject[0].teachers.push({name: link["innerText"], href: link["href"]});
    });

    //Now we need the title for this part
    var title = container.getElementsByClassName("title_page");
    var titleText = title[0]["innerText"].split(" ");

    var month = titleText[2].replace(".", "");
    var day = titleText[3].replace(",", "");
    var year = titleText[4];

    //Set the title in the object
    teacherObject[0].title.push({month: month, day: day, year: year});

    return teacherObject;


  }


}
