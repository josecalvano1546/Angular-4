import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import {HttpClient} from '@angular/common/http'


@Injectable() //Se lo utiliza para poder inyectar el servcio en los modulos. 
export class lugaresService{
    lugares:any[]=[];

        title = 'Angular8Firebase';
       description = 'Angular-Fire-Demo';

      constructor(private afDB:AngularFireDatabase, private http:HttpClient){
         
      }
   
      getAllPersons(){
        return this.http.get('https://swapi.co/api/people')
      }
      getperson(id:string){
        return this.http.get(`https://swapi.co/api/${id}`)
      }

      public buscarLugar(id){
        return this.lugares.filter((lugar)=>{
          return lugar.id == id
        })[0]
      }

      public guardarLugar(lugar){
        console.log(lugar)
        this.afDB.database.ref('lugares'+ lugar.id).set(lugar);
      }

}