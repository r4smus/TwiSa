import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/form-data.service';
import { TwisaApiService } from '../twisa-api.service';
import { Tweet } from '../tweet';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit  {

    tweets: Tweet[];

    constructor(private formDataService: FormDataService, private twisaApiService: TwisaApiService ) { }

    ngOnInit() {
        this.getTweets();
        console.log(this.getTweets());
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
        .filter(tweet => (this.formDataService.getConditions().hashtag === '#' || this.formDataService.getConditions().hashtag === '') && true || this.formDataService.getConditions().hashtag === '#'+tweet.hashtag));
    }
}
