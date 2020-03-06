import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import {HttpClient} from '@angular/common/http'



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


     

      public guardarLugar(lugar){
        console.log(lugar)
        this.afDB.database.ref('lugares'+ lugar.id).set(lugar);
      }

}