import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { LoginPage } from '../pages/login/login';
import { ChartPage } from '../pages/chart/chart';
import { TimelinePage } from '../pages/timeline/timeline';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TimelinePage;
  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
    { title: 'News', component: NewsPage, icon: 'information-circle' },
    { title: 'Chart', component: ChartPage, index: 1, icon: 'contacts' },
    { title: 'Timeline', component: TimelinePage, index: 1, icon: 'contacts' },
  ];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: PageInterface) {
    this.nav.setRoot(page.component);
  }
}
