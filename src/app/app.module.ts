import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from "@angular/http";
import { ProvidersModule } from '../providers/providers.module';
import { ComponentsModule } from '../components/components.module';

//FIREBASE MODULES
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

var config = {
  apiKey: "AIzaSyC8BcAZ0Zi2XYINFS6_DBDtgDL6xnnhz8I",
  authDomain: "app-soccer-team.firebaseapp.com",
  databaseURL: "https://app-soccer-team.firebaseio.com",
  projectId: "app-soccer-team",
  storageBucket: "app-soccer-team.appspot.com",
  messagingSenderId: "44006734947"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    ProvidersModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
