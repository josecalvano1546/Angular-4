import { Component } from '@angular/core';

import { lugaresService} from './services/lugares.service';

import {tokenModel} from './model/token.model'
import { loginModel } from './model/login.model';
import {FormControl} from '@angular/forms'
import { Persona } from './model/persona.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'angular-proyect';
  token:tokenModel;

  cliente:Persona;
  usuarioField: FormControl;

  public user={
    User:'',
    Password:'',
  }

  
  constructor(private lugaresService:lugaresService, 
    private persona:lugaresService,
    ){
    this.usuarioField = new FormControl();
    this.usuarioField.valueChanges
    .subscribe(
      usuario => { console.log(usuario)})
  }

 
  crearAuten(){
    this.lugaresService.generarAuten()
    .subscribe(tok=>{
      console.log('aca bro');
      console.log(tok);
       this.token = tok;
    })
  }

  obtenerNombre(){
    this.persona.generarPersona(this.user, this.token.data.authToken)
    .subscribe(persona=>{
       this.cliente = persona;
    })
  }
  
  
}
