import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import {HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';
import {authenticate} from '../model/authenticate.model';
import { tokenModel } from '../model/token.model';
import { Persona } from '../model/persona.model';



@Injectable() //Se lo utiliza para poder inyectar el servcio en los modulos. 
export class lugaresService{


      title = 'Angular8Firebase'; 
      description = 'Angular-Fire-Demo';

      constructor(private afDB:AngularFireDatabase, private http:HttpClient){
         
      }
     

      getAllPersons(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
      }
      getperson(id:string){
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}/`)
      }
      getphoto(id:string){
        return this.http.get(`https://jsonplaceholder.typicode.com/photos/${id}/`)
      }

      generarAuten(){
        return this.http.get<tokenModel>("http://10.12.21.38:80/api/auth_api"); 
      }

      generarPersona(persona, tokenPersona){

        return this.http.post<Persona>("http://10.12.21.38:80/api/login_user_confirm", persona, {
           headers: {
              'Content-Type': 'application/json',
              'authapi': tokenPersona,
              'channel' : 'WB'

          }
          }
        
        );  
      }

      // auten, {
      //   headers: {
      //     ' Content-Type': 'application/json',
      //    }
      // }
     

      

}