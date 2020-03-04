import { Component } from '@angular/core';
import { lugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crearLugar',
  templateUrl: './crearLugar.component.html' 
  
})
export class crearLugarComponent {
    //Para llamar al servicio debemos crear el constructor
    lugar:any={};
    constructor(private lugaresService:lugaresService){
        lugaresService.guardarLugar(this.lugar)
    }
   
    guardarLugar(){
        this.lugar.id=Date.now();
        this.lugaresService.guardarLugar(this.lugar)
    }

}
