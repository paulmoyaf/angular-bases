import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Output()
  // public deleteCharacter:EventEmitter<number> = new EventEmitter();
  public deleteCharacterById:EventEmitter<string> = new EventEmitter();

  //ESTE ES EL VALOR POR DEFECTO
  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power:  5000
  }]

  onDeleteCharacter(index:number):void{
    //emitir el ID del personaje
    // console.log(index);
    // this.deleteCharacter.emit(index);
  }

  onDeleteById(id?:string):void{
    if(!id)return; // si no existe no hace nada
    this.deleteCharacterById.emit(id);
    console.log(id);
  }
}
