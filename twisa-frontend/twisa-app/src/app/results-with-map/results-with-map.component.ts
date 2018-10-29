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

    const minTweetsCount = this.formDataService.getConditions().tweetCountRange[0];
    const maxTweetsCount = this.formDataService.getConditions().tweetCountRange[1];

    const fromCreatedAt = new Date(this.formDataService.getConditions().createdAtRange[0]);
    const toCreatedAt = new Date(this.formDataService.getConditions().createdAtRange[1]);
    console.log("input_fromCreatedAt" +fromCreatedAt);
    console.log("input_toCreatedAt" +toCreatedAt);

    this.twisaApiService.getTweets()
    .then(tweets => this.tweets = tweets
    .filter(tweet => this.formDataService.getConditions().tweetLanguages.includes(tweet.lang))
    .filter(tweet => tweet.user.followers_count >= minFollower  && tweet.user.followers_count <= maxFollower)
    .filter(tweet => tweet.user.statuses_count  >= minTweetsCount && tweet.user.statuses_count <= maxTweetsCount)
    .filter(tweet => new Date(tweet.user.created_at)  >= fromCreatedAt && new Date(tweet.user.created_at) <= toCreatedAt)
    .filter(tweet => tweet.user.name.includes(this.formDataService.getConditions().userName))
    .filter(tweet => (this.formDataService.getConditions().hashtag === '#' || this.formDataService.getConditions().hashtag === '') && true || this.formDataService.getConditions().hashtag === '#'+tweet.hashtag));
}
}
