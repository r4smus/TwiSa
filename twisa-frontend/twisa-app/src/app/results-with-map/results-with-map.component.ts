import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { TwisaApiService } from '../twisa-api.service';
import { FormDataService } from '../data/form-data.service';
import { SourceType } from '../enums/source-type';

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
// tslint:disable-next-line:no-trailing-whitespace

    this.twisaApiService.getTweetsFromJsonFile()
    .then(tweets => this.tweets = tweets
    .filter(tweet => this.formDataService.getConditions().tweetLanguages.includes(tweet.lang))
    .filter(tweet => this.formDataService.getConditions().sourceTypes.includes(this.getSourceType(tweet.source).name))
    .filter(tweet => tweet.user.followers_count >= minFollower  && tweet.user.followers_count <= maxFollower)
    .filter(tweet => tweet.user.statuses_count  >= minTweetsCount && tweet.user.statuses_count <= maxTweetsCount)
    .filter(tweet => new Date(tweet.user.created_at)  >= fromCreatedAt && new Date(tweet.user.created_at) <= toCreatedAt)
    // tslint:disable-next-line:max-line-length
    .filter(tweet => (this.formDataService.getConditions().userName === undefined || this.formDataService.getConditions().userName === '') && true || tweet.user.name.includes(this.formDataService.getConditions().userName))
    // tslint:disable-next-line:max-line-length
    .filter(tweet => (this.formDataService.getConditions().hashtag === '#' || this.formDataService.getConditions().hashtag === '') && true || this.formDataService.getConditions().hashtag === '#' + tweet.hashtag));
}

getSourceType(source: string): SourceType {
    if (source.includes('Twitter Web Client')) {
        return SourceType.WebClient;
    } else if (source.includes('Twitter for Android')) {
        return SourceType.Android;
    } else if (source.includes('Twitter for iPhone')) {
        return SourceType.Apple;
    } else {
        return SourceType.NotFound;
    }
  }
}
