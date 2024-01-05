import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Personaje } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Personaje[] = [{
    id: uuid(),
    nombre: "Goku",
    poder: 9500
  },{
    id: uuid(),
    nombre: "Tapion",
    poder: 19500
  },{
    id: uuid(),
    nombre: "Vegeta",
    poder: 7500
  },{
    id: uuid(),
    nombre: "Goten",
    poder: 500
  }];

  addCharacter( character: Personaje ):void{


    //Con ...character traigo todos los datos dentro del objeto y luego le añado los que necesito
    const newCharacter: Personaje = { ...character, id: uuid() }

    this.characters.push(newCharacter);

  }

  deleteCharacterById( id: string):void{

      /* this.characters.splice(index, 1); */

    this.characters = this.characters.filter( character => character.id !== id);

  }


}
