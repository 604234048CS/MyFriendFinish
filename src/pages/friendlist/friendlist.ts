import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FrienddeteilPage } from '../frienddeteil/frienddeteil';
import { FriendrestProvider } from '../../providers/friend-rest/friendrest';
import { Friend } from '../../Models/Friendmodels';

/**
 * Generated class for the FriendlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friendlist',
  templateUrl: 'friendlist.html',
})
export class FriendlistPage {

  Friends:Friend;
  classroom:string;

  constructor(public friendRest:FriendrestProvider  ,public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewWillEnter(){
    this.classroom=this.navParams.get("classroom");
   this.friendRest.getFriendList().subscribe(data=>{
     console.log(data);
    this.Friends=data.filter(friend => friend.classroom === this.classroom);
   });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }


  showDetail(studentID:number){
    this.navCtrl.push(FrienddeteilPage,
      {studentID:studentID}
    );
  }
  gotoBack(){
    this.navCtrl.pop();
  }

}
