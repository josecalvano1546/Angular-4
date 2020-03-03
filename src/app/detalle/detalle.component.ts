import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
  
})
export class detalleComponent {
  
  id=null;
  lugar: any ={};
 constructor(private route: ActivatedRoute, private lugaresService:lugaresService){
   console.log(this.route.snapshot.params['id']); //El parametro ID debe conincidir con el que tenemos en el arreglo.
   this.id= this.route.snapshot.params['id']; //Posee el id de la ruta
   this.lugar = lugaresService.buscarLugar(this.id);
   console.log(this.lugar)
 }

}
