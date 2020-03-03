import { Component } from '@angular/core';
import { lugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html'
  
})


export class comp2Component {
  lugares=null;
  constructor(private lugaresService:lugaresService){
    this.lugares = lugaresService.getLugares();
  }

}
