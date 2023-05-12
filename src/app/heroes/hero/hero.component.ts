import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number  = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getheroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'goku';
  }

  changeAge():void{
    this.age = 125;
  }

  resetValues():void{
    this.name = 'ironman';
    this.age = 45;

    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
  // })}
  }
}
