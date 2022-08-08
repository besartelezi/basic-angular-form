import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private _url : string = "http://localhost:9500/addfriend";

  constructor(private _http: HttpClient) {
  }

  get http () {
    return this._http
  }

  addFriend (newFriend : Friend) {
    return this._http.post(this._url, newFriend);
  }

}
