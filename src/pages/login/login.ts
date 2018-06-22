import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SelectPerfilPage } from '../select-perfil/select-perfil';
import { TutorialSlidesPage } from '../tutorial-slides/tutorial-slides';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

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
    public appCrtl: App, public viewCrtl: ViewController, public userService: UsuarioServiceProvider) {
      
  }

  ionViewDidLoad() {
  }

  login(){
    this.appCrtl.getRootNav().push('TutorialSlidesPage')
  }

}
