import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { TwisaApiService } from '../twisa-api.service';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-results-with-map',
  templateUrl: './results-with-map.component.html',
  styleUrls: ['./results-with-map.component.css']
})
export class ResultsWithMapComponent implements OnInit {

  tweets: Tweet[];
  initalCenterLatitude = 46.332424;
  initalCenterLongitude = 2.364239;
  initalZoom = 5;

  constructor(private twisaApiService: TwisaApiService, private formDataService: FormDataService ) { }

  ngOnInit() {
    this.getTweets();
  }


  getTweets(): void {
    const minFollower = this.formDataService.getConditions().followerRange[0];
    const maxFollower = this.formDataService.getConditions().followerRange[1];

    this.twisaApiService.getTweets()
    .then(tweets => this.tweets = tweets
    .filter(tweet => this.formDataService.getConditions().tweetLanguages.includes(tweet.lang))
    .filter(tweet => tweet.user.followers_count >= minFollower  && tweet.user.followers_count <= maxFollower)
    .filter(tweet => (this.formDataService.getConditions().hashtag === '#' || this.formDataService.getConditions().hashtag === '') && true || this.formDataService.getConditions().hashtag === '#'+tweet.hashtag));
}
}
