import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SelectPerfilPage } from '../select-perfil/select-perfil';
import { TutorialSlidesPage } from '../tutorial-slides/tutorial-slides';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  tabsPage = TabsPage
  selctPerfil = SelectPerfilPage
  tutorialPage = TutorialSlidesPage
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public appCrtl: App, public viewCrtl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.appCrtl.getRootNav().push(this.tutorialPage)
  }

}
