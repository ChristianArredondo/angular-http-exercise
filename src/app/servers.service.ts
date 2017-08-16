import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http/';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor (private http: Http) {}
  storeServers (servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http-916fd.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://udemy-ng-http-916fd.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }
    getServers () {
      return this.http.get('https://udemy-ng-http-916fd.firebaseio.com/data.json')
        .map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        )
        .catch(
          (error: Response) => {
            return Observable.throw('Something went wrong');
          }
        );
    }

    getAppName () {
      return this.http.get('https://udemy-ng-http-916fd.firebaseio.com/appName.json')
        .map(
          (response: Response) => {
            console.log(response);
            return response.json();
          }
        );
    }
}
