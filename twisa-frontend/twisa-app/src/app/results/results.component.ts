import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { TwisaApiService } from '../twisa-api.service';
import { Tweet } from '../tweet';
import { FormDataService } from '../data/form-data.service';
import { FormData } from '../data/formData.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, AfterContentInit {

  tweets: Tweet[];
  @Input() formData: FormData;

  constructor(private twisaApiService: TwisaApiService, private formDataService: FormDataService ) { }

  ngOnInit() {
    this.getTweets();
    this.formData = this.formDataService.getFormData();
    console.log(this.formData);
  }

  ngAfterContentInit() {
    this.tweets = this.tweets.filter(tweet => this.formData.tweetLanguages.includes(tweet.lang));
  }

  getTweets(): void {
    this.twisaApiService.getTweets()
      .then(tweets => this.tweets = tweets);
  }

  loadTweets(): void {
      this.tweets = this.tweets.filter(tweet => this.formData.tweetLanguages.includes(tweet.lang));
  }

  public getFlagPath(lang: string): string {
    switch (lang) {
        case 'de':
            return 'assets/images/flags/flag_germany.png';
        case 'en':
            return 'assets/images/flags/flag_uk.png';
        case 'ru':
            return 'assets/images/flags/flag_russia.png';
        case 'es':
            return 'assets/images/flags/flag_spain.png';
        default:
            console.log('No flag path found!');
            break;
    }
}

}
