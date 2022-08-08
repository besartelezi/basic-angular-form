import { Component } from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {

  languageArray = ['PHP', 'CSS', 'HTML', 'Javascript', 'C++', 'C#', 'Español', 'Java', 'Si++, the Spanish C++'];
  friend = new Friend(null, null, null, null, null);

  private _addFriendService : AddFriendService;

  constructor(_addFriendService : AddFriendService) {
    this._addFriendService = _addFriendService;
  }

  submitForm () {
    console.log(this.friend)
    let observable =  this._addFriendService.addFriend(this.friend);
    console.log(observable);
    observable.subscribe(data =>' it worked', error => "it didn't work");
  }
}
