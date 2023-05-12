import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1 class="card-title pb-2" >Ejercicio de Contador</h1>
  <h3 class="card-text pb-2">Counter: <small class="text-primary"> {{counter}} </small> </h3>

  <input name="" id="" class="btn btn-primary mx-2" type="button" value="+1" (click)="increaseByte(+1)">
  <input name="" id="" class="btn btn-secondary mx-2" type="button" value="Reset" (click)="resetCounter()">
  <input name="" id="" class="btn btn-primary mx-2" type="button" value="+1" (click)="increaseByte(-1)">

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
