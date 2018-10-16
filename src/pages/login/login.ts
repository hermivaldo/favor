import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SelectPerfilPage } from '../select-perfil/select-perfil';
import { TutorialSlidesPage } from '../tutorial-slides/tutorial-slides';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { Usuario } from '../../model/usuario.model';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  tabsPage = TabsPage
  selctPerfil = SelectPerfilPage
  tutorialPage = TutorialSlidesPage
  
  usuario: Usuario = new Usuario()

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public appCrtl: App, public viewCrtl: ViewController, public userService: UsuarioServiceProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.usuario.tutorial = true;
  }

  ionViewDidLoad() {
  }

  login(){
    
    var load = this.loadingCtrl.create({
      content: "Por favor aguarde...",
      duration: 5000 
    });
    load.present();
    var result =  this.userService.findUser(this.usuario);
    result.subscribe(result => {
      load.dismiss("normal");
      if (result.length > 0){
        var user: Usuario = result[0];
        this.userService.changeUser(user);
        if (user.tutorial){
          this.appCrtl.getRootNav().push('TutorialSlidesPage');
        }else{
          this.appCrtl.getRootNav().push(this.selctPerfil)
        }
      } else {
        this.showAlert();
      }
    });
    

    load.onDidDismiss(dado => {
      console.log('Dismissed loading'+ dado);
    });
  }

  cadastrar(){
    
    this.userService.addUser(this.usuario);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'FALHA DE AUTENTICAÇÃO',
      subTitle: 'Usuário não localizado no sistema.',
      buttons: ['OK']
    });
    alert.present();
  }

}
