import { Injectable } from '@angular/core';
import 'rxjs/RX';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class LoginService{
    constructor() {
  }

  public getLatestAccessToken():string{
      return "123456";
  }
    
}