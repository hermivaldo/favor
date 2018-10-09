import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemListUsPage } from '../pages/item-list-us/item-list-us';
import { ListUsProvider } from '../providers/list-us/list-us';
import { LoginPage } from '../pages/login/login';
import { SelectPerfilPage } from '../pages/select-perfil/select-perfil';
import { DetailModalPage } from '../pages/detail-modal/detail-modal';
import { FormOptSimplesPage } from '../pages/form-opt-simples/form-opt-simples';
import { FormOptComplePage } from '../pages/form-opt-comple/form-opt-comple';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';

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
    ItemListUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
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
    ItemListUsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioServiceProvider,
    ListUsProvider
  ]
})
export class AppModule {}
