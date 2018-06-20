import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialSlidesPage } from './tutorial-slides';

@NgModule({
  declarations: [
    TutorialSlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorialSlidesPage),
  ],
})
export class TutorialSlidesPageModule {}
