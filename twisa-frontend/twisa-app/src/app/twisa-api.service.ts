import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tweet } from './tweet';


@Injectable()
export class TwisaApiService {

  private baseUrl = 'http://localhost:8080/twisa-api';

  constructor(private http: Http) { }

  getTweets(): Promise<Tweet[]> {
    return this.http.get(this.baseUrl + '/tweets')
      .toPromise()
      .then(response => response.json() as Tweet[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}