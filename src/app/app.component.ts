import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // loadedFeature = 'recipe';

  // onNavigate(feature: string){
  //   this.loadedFeature = feature;
  // }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDHGKUbczaDS8fg5dBTOO9aSvgFjIGadFU",
      authDomain: "umar-ng-recipe-book.firebaseapp.com",
      databaseURL: "https://umar-ng-recipe-book.firebaseio.com",
      projectId: "umar-ng-recipe-book",
      storageBucket: "umar-ng-recipe-book.appspot.com",
      messagingSenderId: "101256262799"
    });
  }

}
