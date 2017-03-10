import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginService } from '../../providers/login-service';
import { NewsPage } from '../news/news'
//  import { UserInfo } from '../../model/user-info'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {
    name: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public storage: Storage,public loginService: LoginService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.set('name', '17608008325');
      this.storage.set('password', 'Pass@123');
    });
  }

  onSubmit() {
    console.log(this.user.name);
    this.storage.get('name').then((val)=>{
      return (val == this.user.name);
    }).then(isRight =>{
      console.log(isRight);
      this.storage.get('password').then((val)=>{
        if(isRight && val==this.user.password){
          this.storage.set('accessToken', this.loginService.getLatestAccessToken()).then(any =>{
             this.navCtrl.setRoot(NewsPage);
          });
         
        }
      })
    })

  }

}
