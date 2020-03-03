import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

//Crear una ruta
const appRoutes: Routes =[
  {path:'lugares', component: AppComponent}, //Nombre de la url,
  //Componentes para lugares
  {path:'detalle/:id', component: detalleComponent},
  {path:'comp2', component: comp2Component},
  {path:'ejercicio', component: ejercicioComponent},
  {path:'contacto', component: contactoComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    detalleComponent,
    comp2Component,
    ejercicioComponent,
    contactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Mapa
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAaT65KvMsv7FzeG0S3c-x3988srZlVnFg'
    }),
    //Importamos la ruta del modulo.
    RouterModule.forRoot(appRoutes)

  ],
  providers: [lugaresService], //Para exportar el servicio en el modulo. 
  bootstrap: [AppComponent]
})
export class AppModule { }
