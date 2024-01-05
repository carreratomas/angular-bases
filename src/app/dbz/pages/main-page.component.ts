import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/character.interface';
import { AddCaracterComponent } from '../components/add-caracter/add-caracter.component';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {

  }

  get characters(): Personaje[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Personaje ):void{
    this.dbzService.addCharacter(character);
  }
}
