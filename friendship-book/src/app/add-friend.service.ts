import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private _http : HttpClient
  constructor(_http : HttpClient) {
    this._http = _http;
  }

  get http () {
    return this._http
  }

}
