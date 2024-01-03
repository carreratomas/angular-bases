import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{

  public name: string = 'iron man';
  public age: number = 45;
  public nameChanged: boolean = true;
  public ageChanged: boolean = true;

  get capitalizedName(): string{

    return this.name.toUpperCase();

  }

  getHeroDescription(): string{

    return `${this.name} - ${this.age}`;

  }

  changeHero(): void{

    this.name = 'Flash';
    this.nameChanged = false;
  }

  changeAge(): void{

    this.age = 22;
    this.ageChanged = false;

  }

  resetForm(): void{
    this.name = 'iron man';
    this.age = 45;

  }

}
