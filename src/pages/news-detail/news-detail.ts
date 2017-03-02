import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsData} from '../../providers/news-data';
import {LoadingController} from 'ionic-angular'
import { ToastController } from 'ionic-angular'

/*
  Generated class for the news-detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage {
  newsDetail : any;
  loading: any;
  newsId: string;

  constructor(public navCtrl: NavController, public newsData: NewsData, public loadingController: LoadingController, 
  public params:NavParams, private toastCtrl: ToastController) {
    this.loading = this.loadingController.create({
        content: "loading..."
      });
      this.newsId = params.get('id');
      console.log(this.newsId);

  	
  }

  ngOnInit(){
      this.newsData.loadNewsDetail(this.newsId).subscribe(response => {     
      this.newsDetail = response;
      console.log(this.newsDetail);
      this.loading.dismiss(); 
    },(errorResponse: any) => {
      this.showToast("Network is unavailable.")
      this.loading.dismiss();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
    this.loading.present();
  }

  showToast(content: string) {
    let toast = this.toastCtrl.create({
      message: content,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
