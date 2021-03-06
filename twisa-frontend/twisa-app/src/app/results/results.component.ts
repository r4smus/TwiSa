import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/form-data.service';
import { TwisaApiService } from '../twisa-api.service';
import { Tweet } from '../tweet';
import { SourceType } from '../enums/source-type';
import { Hashtags } from '../hashtags/hashtags';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit  {

    p: number = 1;
    tweets: Tweet[];

    constructor(private formDataService: FormDataService, private twisaApiService: TwisaApiService ) { }

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
        .filter(tweet => (this.formDataService.getConditions().hashtag === '#' || this.formDataService.getConditions().hashtag === '') && true || this.includesHashtag(tweet.entities.hashtags)));
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

    includesHashtag(hashtags: Hashtags[]): boolean {
        if (hashtags === undefined || hashtags === null) {
            return false;
        } else {
            const searchedHashtag = this.formDataService.getConditions().hashtag;
            for (let hashtag of hashtags) {
                if('#' +hashtag.text === searchedHashtag){
                    return true;
                }
            }
            return false;
        }
    }
}
