import {Menu} from "../pages/menu/menu";
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ElsberrySchools } from './app.component';
import { Home } from '../pages/home/home';
import { Elementary } from '../pages/elementary/elementary';
import { CalendarTemp } from "../pages/calendar-temp/calendar-temp";
import { ObjToKeys } from '../pipes/obj-to-keys';
import {High} from "../pages/high/high";
import {Middle} from "../pages/middle/middle";
import {BusRoutes} from "../pages/bus-routes/bus-routes";
import {PdfView} from "../pages/pdf-view/pdf-view";
import {PdfViewerComponent} from "ng2-pdf-viewer";
import {Newsletter} from "../pages/newsletter/newsletter";

@NgModule({
  declarations: [
    ElsberrySchools,
    Home,
    Elementary,
    High,
    Middle,
    CalendarTemp,
    BusRoutes,
    PdfView,
    Menu,
    Newsletter,
    ObjToKeys,
    PdfViewerComponent
  ],
  imports: [
    IonicModule.forRoot(ElsberrySchools)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ElsberrySchools,
    High,
    Home,
    Middle,
    Elementary,
    CalendarTemp,
    BusRoutes,
    PdfView,
    Menu,
    Newsletter
  ],
  providers: []
})
export class AppModule {}
