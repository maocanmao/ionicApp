import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Timeline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {
  timelineList=[
    {title:'空腹血糖测试',address:'新世纪医院', detail:'空腹血糖超标', time:'2016年11月5日'},
    {title:'空腹血糖测试1',address:'新世纪医院', detail:'空腹血糖超标1', time:'2016年11月4日'},
    {title:'空腹血糖测试2',address:'新世纪医院', detail:'空腹血糖超标2', time:'2016年11月3日'},
    {title:'空腹血糖测试3',address:'新世纪医院', detail:'空腹血糖超标3', time:'2016年11月2日'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
