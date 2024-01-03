import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{

  public heroNames: string[] = ['Spiderman', 'Flash', 'Thor', 'Ironman', 'Hulk'];
  public heroeBorrado?: string;

  borrarHeroe(): void{

    if(this.heroNames.length > 0){

      this.heroeBorrado = this.heroNames.pop();

    }

  }

}
