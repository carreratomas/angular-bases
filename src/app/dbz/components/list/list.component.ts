import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponentDBZ {

  @Input()
  public characterList: Personaje[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  deleteCharacterById( id: string):void {

    this.onDelete.emit(id);

  }

}
