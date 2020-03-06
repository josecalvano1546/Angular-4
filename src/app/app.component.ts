import { Component } from '@angular/core';
import { authenticate } from './model/authenticate.model';
import { lugaresService} from './services/lugares.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'angular-proyect';
  constructor(private lugaresService:lugaresService){

  }
  

  lat:number= -27.4692083;
  lng:number= -58.8328236;
  crearAuten(){
    const newAuten: authenticate = {
      Btinreq: {
        Device: "WEB",
        Usuario: "BTMOVTST",
        Requerimiento: "20",
        Canal: "BTMOBILE",
        Token: ""
      },
      UserId: "BTMOVTST",
      UserPassword: "*CTeS3017*"
    }
    this.lugaresService.generarAuten(newAuten)
    .subscribe(tok=>{
      console.log('aca bro');
      
      console.log(tok)
    })
  }
  
}
