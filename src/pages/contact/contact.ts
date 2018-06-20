import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  loginPage = LoginPage

  constructor(public navCtrl: NavController, public appCrtl: App) {

  }

  sairSistema(){
    this.appCrtl.getRootNav().setRoot(this.loginPage)
  }
}
