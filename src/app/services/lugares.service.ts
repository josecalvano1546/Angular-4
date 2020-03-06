import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';
import {authenticate} from '../model/authenticate.model';



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

      generarAuten(auten:authenticate){
        return this.http.post("http://10.13.99.200:9209/bantotal/servlet/com.dlya.bantotal.odwsbt_AWSBTAuthenticate?Execute", auten, {
          headers: ({
              'Content-Encoding': 'gzip',
               'Content-Type':  'application/json;charset=utf-8',

             })
        }); 
      }
     

      public guardarLugar(lugar){
        console.log(lugar)
        this.afDB.database.ref('lugares'+ lugar.id).set(lugar);
      }

}