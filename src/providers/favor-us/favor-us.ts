import { Injectable } from '@angular/core';
import { FavorUS } from '../../model/item-list-us-model';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators'
import { StatusFavor } from '../../model/status-favor';
/*
  Generated class for the FavorUsProvider provider.
  
  metodo utilizado para gerenciar os dados dos favores cadastrados
*/
@Injectable()
export class FavorUsProvider {

  private favoresList = this.db.list<FavorUS>('favores')

  constructor(private db: AngularFireDatabase) {

  }

  getFavorList(status : StatusFavor) {
    return this.favoresList.snapshotChanges().pipe(
      map( changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        .filter( c => c.tipo == status  )  
      )
    );
  }
  // adicionar um novo favor
  addFavor(favor: FavorUS){
    return this.favoresList.push(favor)
  }

}
