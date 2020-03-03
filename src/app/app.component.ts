import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// cregir esooooo
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAaT65KvMsv7FzeG0S3c-x3988srZlVnFg",
    authDomain: "joseproyecto1.firebaseapp.com",
    databaseURL: "https://joseproyecto1.firebaseio.com",
    projectId: "joseproyecto1",
    storageBucket: "joseproyecto1.appspot.com",
    messagingSenderId: "527980418682",
    appId: "1:527980418682:web:82435d505870d52cb28dc3",
    measurementId: "G-7PQ6MWZHQW"
  }
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'angular-proyect';

  

  lat:number= -27.4692083;
  lng:number= -58.8328236;
  
  
}
