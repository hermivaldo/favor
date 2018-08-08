import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemListUsPage } from './item-list-us';

@NgModule({
  declarations: [
    ItemListUsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemListUsPage),
  ],
})
export class ItemListUsPageModule {}
