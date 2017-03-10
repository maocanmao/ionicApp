import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsData } from '../../providers/news-data';
import { LoginService } from '../../providers/login-service';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular'
import { NewsDetailPage } from '../news-detail/news-detail'
import { LoginPage } from '../login/login'
import { ToastController } from 'ionic-angular'
import { Slides } from 'ionic-angular'
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';

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
  newsList: any;
  loading: any;
  topNewsList: any;

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public newsData: NewsData,
    public loadingController: LoadingController, private toastCtrl: ToastController,
    private loginService: LoginService, public storage: Storage, public menuController: MenuController) {
    this.loading = this.loadingController.create({
      content: "Loading..."
    });
    menuController.enable(true);
  }

  ngOnInit() {
    console.log("Ng On Init");
    this.storage.get("accessToken").then((val) => {
      console.log("Current accessToken:" + val);
      console.log("latest accessToken:" + this.loginService.getLatestAccessToken());
      if (val != this.loginService.getLatestAccessToken()) {
        this.navCtrl.setRoot(LoginPage);
      } else {
        this.loading.present();
        this.loadNews();
      }
    })

  }

  loadNews() {
    this.newsData.load().subscribe(response => {
      this.newsList = response.stories;
      this.topNewsList = response.top_stories;
      console.log(response);

      this.loading.dismiss();
    }, (errorResponse: any) => {
      this.showToast("Network is unavailable.")
      this.loading.dismiss();
    });
  }

  doRefresh(refresher) {
    this.newsData.load().subscribe(response => {
      this.newsList = response.stories;
      this.topNewsList = response.top_stories;
      console.log(response);
      refresher.complete();
      this.loading.dismiss();
    }, (errorResponse: any) => {
      this.showToast("Network is unavailable.")
      this.loading.dismiss();
      refresher.complete();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  newsSelected(id: string) {
    console.log(id);
    this.navCtrl.push(NewsDetailPage, {
      id: id
    });
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

  toggleMenu() {
    this.menuController.toggle();
  }

}
