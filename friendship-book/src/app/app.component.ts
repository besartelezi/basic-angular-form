import { Component } from '@angular/core';
import {ParseTreeResult} from "@angular/compiler";
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {
  languageArray = ['PHP', 'CSS', 'HTML', 'Javascript', 'C++', 'C#', 'Español', 'Java', 'Si++, the Spanish C++'];
  friend = new Friend(null, null, null, null, null);
  submitForm () {
    console.log(this.friend);
  }
}
