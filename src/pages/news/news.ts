import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsData} from '../../providers/news-data';
import {LoadingController} from 'ionic-angular'
import {NewsDetailPage} from '../news-detail/news-detail'

/*
  Generated class for the News page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  newsList : any;
  loading: any;

  constructor(public navCtrl: NavController, public newsData: NewsData, public loadingController: LoadingController) {
    this.loading = this.loadingController.create({
        content: "Loading..."
      });

  	this.newsData.load().subscribe(response => {
      this.newsList = response.stories;
      console.log(this.newsList);
      this.loading.dismiss(); 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.loading.present();
  }

  newsSelected(id:string){
    console.log(id);
    this.navCtrl.push(NewsDetailPage,{
      id:id
    });
  }


}
