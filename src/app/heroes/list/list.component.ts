import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Goku','Gohan','Trunks','Picolo'];
  public deletedHero?: string;

  removeLastHeroe():void{
    this.deletedHero = this.heroNames.pop();
  }

  resetValues():void{
    this.heroNames = ['Goku','Gohan','Trunks','Picolo'];
  }

}
