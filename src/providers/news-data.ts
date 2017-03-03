import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/RX';

/*
  Generated class for the News provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsData {
	newsApiUrl = 'http://news-at.zhihu.com/api/4';

  

  constructor(public http: Http) {
    console.log('Hello News Provider');
  }

  load(){
  	 return this.http.get(this.newsApiUrl + '/news/latest').timeout(10000).map(res => res.json());
  }

  loadNewsDetail(id:string){
    return this.http.get(this.newsApiUrl+ '/news/'+ id).map(res => res.json());
  }

  loadNewsExtra(id:string){
    return this.http.get(this.newsApiUrl + '/story-extra/' +id).map(res => res.json());
  }

  loadNewsComments(newsId: string){
    return this.http.get(this.newsApiUrl + '/story/' + newsId + '/short-comments').map(res => res.json());
  }

}
