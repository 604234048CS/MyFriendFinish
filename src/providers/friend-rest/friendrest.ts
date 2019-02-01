import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from '../../Models/Friendmodels';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FriendrestProvider {
  
  private url:string="https://raw.githubusercontent.com/604234048CS/FriendTeam/master/op3.json";

  constructor(public http: HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }
  getFriendList():Observable<any>
  {
    return this.http.get<Friend>(this.url)
  }
}
