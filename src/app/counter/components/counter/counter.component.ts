import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counter</h1>
  <!-- se pone el nombre de la variable de abajo -->
  <h3>Counter {{counter}}</h3>

  <button (click)="increaseByte(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseByte(-1)">-1</button>


  `
})

export class CounterComponent  {
  constructor() { }
  public counter:number = 123;

  increaseByte(value:number):void{
    this.counter += value;
  }

  resetCounter():void{
    this.counter = 123;
  }
}
