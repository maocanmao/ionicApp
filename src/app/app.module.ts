import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { NewsCommentsPage } from '../pages/news-comments/news-comments';

import { NewsData } from '../providers/news-data';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    NewsCommentsPage,
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
    NewsDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},NewsData]
})
export class AppModule {}
