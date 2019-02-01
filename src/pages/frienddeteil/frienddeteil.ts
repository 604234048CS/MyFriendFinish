import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../Models/Friendmodels';
import { FriendrestProvider } from '../../providers/friend-rest/friendrest';

/**
 * Generated class for the FrienddeteilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-frienddeteil',
  templateUrl: 'frienddeteil.html',
})
export class FrienddeteilPage {

  studentID:number;
  friend:Friend;

  constructor(private Friendrest:FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentID=this.navParams.get("studentID");
    this.Friendrest.getFriendList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentID === this.studentID)[0];
     });

  }

  ionViewDidLoad() {
    this.studentID=this.navParams.get("studentID");
    console.log(this.studentID);
  }

  gotoBack(){
    this.navCtrl.pop();
  }

}
