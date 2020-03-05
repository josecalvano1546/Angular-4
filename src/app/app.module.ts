import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {detalleComponent} from "./detalle/detalle.component";
import { comp2Component } from './comp2/comp2.component';
import { ejercicioComponent } from './ejercicio/ejercicio.componente';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { contactoComponent } from './contacto/contacto.component';
import { lugaresService } from './services/lugares.service';
import { crearLugarComponent } from './crearLugar/crearLugar.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import {HttpClientModule} from '@angular/common/http';

//Crear una ruta
const appRoutes: Routes =[
  {path:'lugares', component: AppComponent}, //Nombre de la url,
  //Componentes para lugares
  {path:'detalle/:id', component: detalleComponent},
  {path:'comp2', component: comp2Component},
  {path:'ejercicio', component: ejercicioComponent},
  {path:'contacto', component: contactoComponent},
  {path:'crear', component: crearLugarComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    detalleComponent,
    comp2Component,
    ejercicioComponent,
    contactoComponent,
    crearLugarComponent,
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

    
  ],
  providers: [lugaresService], //Para exportar el servicio en el modulo. 
  bootstrap: [AppComponent]
})
export class AppModule { }
