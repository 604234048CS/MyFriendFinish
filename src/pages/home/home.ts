import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';
import { FriendlistPage } from '../friendlist/friendlist';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showFriendlist(classRoom:string){
    console.log(classRoom);
    this.navCtrl.push(FriendlistPage, 
      {classroom:classRoom}
      );
  }

}
