import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lugaresService } from '../services/lugares.service';
import {persona} from '../model/persona.model';  
import { from } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
  
})
export class detalleComponent {
  
  id=null;
  photo=null;
  lugar2=null;
 constructor(private route: ActivatedRoute, private lugaresService:lugaresService){
   console.log(this.route.snapshot.params['id']); //El parametro ID debe conincidir con el que tenemos en el arreglo.
   this.id= this.route.snapshot.params['id']; //Posee el id de la ruta
  
 }

 ngOnInit(){
  this.fetchpersona();
  this.fetchphoto();
 }
  fetchpersona(){
    this.lugaresService.getperson(this.id)
    .subscribe( lugares => {
      this.lugar2 = lugares;
    })}

    fetchphoto(){
      this.lugaresService.getphoto(this.id)
    .subscribe( photos => {
      this.photo = photos;
      console.log(photos);
      console.log(this.photo);
    })
    }
}
