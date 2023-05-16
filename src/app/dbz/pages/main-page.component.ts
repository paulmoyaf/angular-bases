import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  // aqui me habilita toda la informacion
  // es buena practica hacerla privada
  constructor(private dbzService: DbzService){}

    get characters():Character[]{
      // return this.dbzService.characters;
      return [...this.dbzService.characters]; // es opcional el ... y los []
    }

    onDeleteCharacter(id:string):void{
      this.dbzService.onDeleteById(id);
    }

    onNewCharacter(character:Character){
      this.dbzService.addCharacter(character);
    }
  }


