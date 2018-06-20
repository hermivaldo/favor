import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SelectPerfilPage } from '../pages/select-perfil/select-perfil';
import { DetailModalPage } from '../pages/detail-modal/detail-modal';
import { FormOptSimplesPage } from '../pages/form-opt-simples/form-opt-simples';
import { FormOptComplePage } from '../pages/form-opt-comple/form-opt-comple';
import { TutorialSlidesPage } from '../pages/tutorial-slides/tutorial-slides';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SelectPerfilPage,
    DetailModalPage,
    FormOptSimplesPage,
    FormOptComplePage,
    TutorialSlidesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SelectPerfilPage,
    DetailModalPage,
    FormOptSimplesPage,
    FormOptComplePage,
    TutorialSlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
