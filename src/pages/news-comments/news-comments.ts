
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsData } from '../../providers/news-data';
import { LoadingController } from 'ionic-angular'
import { ToastController } from 'ionic-angular'

@Component({
    selector: 'page-news-comments',
    templateUrl: 'news-comments.html'
})
export class NewsCommentsPage {
    commentList: any;
    loading: any;
    newsId: any;

    constructor(public navCtrl: NavController, public newsData: NewsData, public loadingController: LoadingController, private toastCtrl: ToastController,
        public params: NavParams, ) {
        this.loading = this.loadingController.create({
            content: "Loading..."
        });
        this.newsId = params.get('id');
    }

    ngOnInit() {
        this.newsData.loadNewsComments(this.newsId).subscribe(response => {
            this.commentList = response.comments;
            console.log(this.commentList);
            this.loading.dismiss();
        }, (errorResponse: any) => {
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

    doRefresh(refresher) {
        this.newsData.loadNewsComments(this.newsId).subscribe(response => {
            this.commentList = response.comments;
            console.log(this.commentList);
            refresher.complete();
        }, (errorResponse: any) => {
            this.showToast("Network is unavailable.")
            refresher.complete();
        });
    }

}