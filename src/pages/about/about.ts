import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormOptSimplesPage } from '../form-opt-simples/form-opt-simples';
import { FormOptComplePage } from '../form-opt-comple/form-opt-comple';
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  todo = {}
  
  logForm() {
    alert(this.currentPhoto);
    console.log(this.todo)
  }
  currentPhoto = "assets/imgs/av1.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,public camera : Camera) {
 
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

      this.currentPhoto = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
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
