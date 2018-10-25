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
        console.log(this.formDataService.getConditions());
    }

    getTweets(): void {
        const minFollower = this.formDataService.getConditions().followerRange[0];
        const maxFollower = this.formDataService.getConditions().followerRange[1];

        const minTweetsCount = this.formDataService.getConditions().tweetCountRange[0];
        const maxTweetsCount = this.formDataService.getConditions().tweetCountRange[1];
    
        this.twisaApiService.getTweets()
        .then(tweets => this.tweets = tweets
        .filter(tweet => this.formDataService.getConditions().tweetLanguages.includes(tweet.lang))
        .filter(tweet => tweet.user.followers_count >= minFollower  && tweet.user.followers_count <= maxFollower)
        .filter(tweet => tweet.user.statuses_count  >= minTweetsCount && tweet.user.statuses_count <= maxTweetsCount)
        .filter(tweet => (this.formDataService.getConditions().hashtag === '#' || this.formDataService.getConditions().hashtag === '') && true || this.formDataService.getConditions().hashtag === '#'+tweet.hashtag));
    }
}
