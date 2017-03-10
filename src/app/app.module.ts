import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { NewsCommentsPage } from '../pages/news-comments/news-comments';
import { LoginPage } from '../pages/login/login';

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
    NewsDetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, NewsData, Storage, LoginService]
})
export class AppModule { }
