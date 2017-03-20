import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { NewsCommentsPage } from '../pages/news-comments/news-comments';
import { LoginPage } from '../pages/login/login';
import { ChartPage } from '../pages/chart/chart';
import { TimelinePage } from '../pages/timeline/timeline';

import { NewsData } from '../providers/news-data';
import { LoginService } from '../providers/login-service';
// import { UserInfo } from '../model/user-info';

import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    NewsCommentsPage,
    LoginPage,
    ChartPage,
    TimelinePage,
    NewsDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    NewsCommentsPage,
    LoginPage,
    ChartPage,
    TimelinePage,
    NewsDetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, NewsData, Storage, LoginService]
})
export class AppModule { }
