import {PdfView} from "../pdf-view/pdf-view";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsletterProvider} from "../../providers/newsletter-provider";
import {Home} from "../home/home";

/*
  Generated class for the Newsletter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-newsletter',
  templateUrl: 'newsletter.html',
  providers: [NewsletterProvider]
})

export class Newsletter {

  displayTeachObj: any[];
  title: {month: string, day: string, year: string} = {month: "", day: "", year: ""};

  constructor(public navCtrl: NavController, private newsletterProvider: NewsletterProvider)
  {
    this.displayTeachObj = [];
  }

  ionViewDidLoad() {
    //Get the home page for the elementary school
    this.newsletterProvider.getCCEHome().subscribe(
      data => {
        if(data["status"] == 200){
          //Get the first newsletter you see
          this.newsletterProvider.extractNewsletterHtml(data["_body"]).subscribe(
            data =>{
              //Extract teacher data from this newsletter batch
              var teacherObj = this.newsletterProvider.extractTeachers(data["_body"]);
              this.displayTeachObj = teacherObj[0].teachers;
              this.title = teacherObj[0].title[0];
            },
            err =>{
              console.log("An error occurred getting the bus routes page");
              console.log(err);
              this.navCtrl.push(Home);
            }
          );
        }

      },
      err => {
        console.log("An error occurred getting the bus routes page");
        console.log(err);
        this.navCtrl.push(Home);
      }
    );
  }

  teacherClick(teacher){
    this.navCtrl.push(PdfView, teacher)
  }

}
