import { Component } from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  url : string = "http://localhost:9500/allfriends";
  allFriends : Friend[] = [];
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
    observable.subscribe(data =>this.getFriendsOnLoad('http://localhost:9500/allfriends'), error => "it didn't work");
  }

  public async getFriendsOnLoad (url : string) : Promise<any> {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.allFriends = await response.json();
    console.log(this.allFriends);
  }

  ngOnInit(): any {
    this.getFriendsOnLoad('http://localhost:9500/allfriends');
  }

}
