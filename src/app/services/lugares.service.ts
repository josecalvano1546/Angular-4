import { Injectable } from "@angular/core";

@Injectable() //Se lo utiliza para poder inyectar el servcio en los modulos. 
export class lugaresService{
    lugares=[
        {id:1,plan:'pago', cercania:1 , distancia: 10, active:false,nombre:'floreria A'},
        {id:2,plan:'gratuito', cercania:2 , distancia: 13, active:true,nombre:'floreria B'},
        {id:3,plan:'gratuito', cercania:3 , distancia: 20, active:true,nombre:'floreria C'},
        {id:4,plan:'pago', cercania:1 , distancia: 10, active:true,nombre:'floreria D'},
        {id:5,plan:'gratuito', cercania:3 , distancia: 5, active:false,nombre:'floreria E'},
        {id:6,plan:'pago', cercania:1 , distancia: 11, active:true,nombre:'floreria F'},
        {id:7,plan:'gratuito', cercania:1 , distancia: 19, active:true,nombre:'floreria G'},
      ];
      public getLugares(){
          return this.lugares
      }
      public buscarLugar(id){
        return this.lugares.filter((lugar)=>{
          return lugar.id == id
        })[0]
      }

}