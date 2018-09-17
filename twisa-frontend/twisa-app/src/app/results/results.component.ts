import { Component, OnInit, Input } from '@angular/core';
import { TwisaApiService } from '../twisa-api.service';
import { Tweet } from '../tweet';
import { FormDataService } from '../data/form-data.service';
import { FormData } from '../data/formData.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  tweets: Tweet[];
  @Input() formData: FormData;

  constructor(private twisaApiService: TwisaApiService, private formDataService: FormDataService ) { }

  ngOnInit() {
    this.getTweets();
    this.formData = this.formDataService.getFormData();
    console.log(this.formData);
  }


  getTweets(): void {
    if (this.formDataService.languageSelected()) {
        this.twisaApiService.getTweets()
      .then(tweets => this.tweets = tweets.filter(tweet => this.formData.tweetLanguages.includes(tweet.lang)));
    } else {
        this.twisaApiService.getTweets()
      .then(tweets => this.tweets = tweets);
    }
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
