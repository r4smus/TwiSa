import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tweet } from './tweet';


@Injectable()
export class TwisaApiService {

  private baseUrl = 'http://localhost:8080/twisa-api';
  // private jsonFile =  'assets/tweets.json';
  private jsonFile =  'assets/5k_tweets_parsed.json';
  // private jsonFile =  'assets/tweets_parsed.json';
  // test

  constructor(private http: Http) { }

  getTweets(): Promise<Tweet[]> {
    return this.http.get(this.baseUrl + '/tweets')
      .toPromise()
      .then(response => response.json() as Tweet[])
      .catch(this.handleError);
  }

  getTweetsFromJsonFile () {
    return this.http.get(this.jsonFile)
      .toPromise()
      .then(response => response.json() as Tweet[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }


}
