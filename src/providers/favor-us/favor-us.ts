import { Injectable } from '@angular/core';
import { FavorUS } from '../../model/item-list-us-model';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FavorUsProvider provider.
  
  metodo utilizado para gerenciar os dados dos favores cadastrados
*/
@Injectable()
export class FavorUsProvider {

  private favoresList = this.db.list<FavorUS>('favores')

  constructor(private db: AngularFireDatabase) {

  }

  // adicionar um novo favor
  addFavor(favor: FavorUS){
    return this.favoresList.push(favor)
  }

}
