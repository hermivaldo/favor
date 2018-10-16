import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { FavorUS } from '../../model/item-list-us-model';
import { FavorUsProvider } from '../../providers/favor-us/favor-us';
import { StatusFavor } from '../../model/status-favor';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  todo: FavorUS = new FavorUS();
  
  logForm() {
    
    this.favorBD.addFavor(this.todo);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public camera : Camera, public favorBD: FavorUsProvider, user: UsuarioServiceProvider) {
    this.todo.imagem = "assets/imgs/av1.png";
    this.todo.usuario = user.getUsarioLogado();
    this.todo.tipo = StatusFavor.ABERTO;
    this.todo.dataCriacao = new Date();
  }

  getPhoto(type){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {

      this.todo.imagem = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      console.log("falha ao capturar a foto");
    });
  }

  // CODIGO PARA TRABALHAR COM MULTIPLAS TELAS DENTRO DE UMA UNICA PAGINA
  //@ViewChild("parent", {read: ViewContainerRef}) parent: ViewContainerRef
  // childSimples: any;
  // childComple: any;

  // childSelected: any;

  // constructor(public navCtrl: NavController, private componentFacotory: ComponentFactoryResolver) {
  //     this.childSimples = this.componentFacotory.resolveComponentFactory(FormOptSimplesPage)
  //     this.childComple = this.componentFacotory.resolveComponentFactory(FormOptComplePage)
  // }

  // onChange(value){
  //     this.parent.remove(0)
  //     switch(value){
  //         case 'nes':
            
  //           this.parent.createComponent(this.childSimples)
  //           break;

  //         case 'snes':
  //           this.parent.createComponent(this.childComple)
  //           break;
  //     }
      
  // }

  
}
