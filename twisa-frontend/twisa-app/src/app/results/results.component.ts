import { Component, OnInit } from '@angular/core';
import { TwisaApiService } from '../twisa-api.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  tweets: Tweet[];

  constructor(private twisaApiService: TwisaApiService,) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets(): void {
    this.twisaApiService.getTweets()
      .then(tweets => this.tweets = tweets);
  }

}
