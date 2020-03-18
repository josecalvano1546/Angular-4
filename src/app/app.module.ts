import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {detalleComponent} from "./detalle/detalle.component";



import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';

import { lugaresService } from './services/lugares.service';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import {HttpClientModule} from '@angular/common/http';

import{ReactiveFormsModule} from '@angular/forms';
//Crear una ruta
const appRoutes: Routes =[
  {path:'lugares', component: AppComponent}, //Nombre de la url,
  //Componentes para lugares
  {path:'detalle/:id', component: detalleComponent},
 
];


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    detalleComponent,
 
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    //Mapa
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAaT65KvMsv7FzeG0S3c-x3988srZlVnFg'
    }),
    //Importamos la ruta del modulo.
    RouterModule.forRoot(appRoutes),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // para database

    ReactiveFormsModule,
    
  ],
  providers: [lugaresService], //Para exportar el servicio en el modulo. 
  bootstrap: [AppComponent]
})
export class AppModule { }
