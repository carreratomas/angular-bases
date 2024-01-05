import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-caracter',
  templateUrl: './add-caracter.component.html'
})

export class AddCaracterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  public character: Personaje = {
    id: uuid(),
    nombre: '',
    poder: 0
  }

  addCharacter():void{


    if (this.character.nombre.length === 0 || this.character.poder < 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {id: uuid(), nombre: '', poder: 0};

  }

}
