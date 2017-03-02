import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';

import { NewsData } from '../providers/news-data';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    NewsDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    NewsDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},NewsData]
})
export class AppModule {}
