import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormOptSimplesPage } from '../form-opt-simples/form-opt-simples';
import { FormOptComplePage } from '../form-opt-comple/form-opt-comple';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  //@ViewChild("parent", {read: ViewContainerRef}) parent: ViewContainerRef
  todo = {}
  childSimples: any;
  childComple: any;

  childSelected: any;

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
