import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { TwisaApiService } from '../twisa-api.service';
import { FormDataService } from '../data/form-data.service';
import { FormData } from '../data/formData.model';
import { SourceType } from '../enums/source-type';
import { LanguageType } from '../enums/language-type';
import { SelectAttribute } from '../enums/select-attribute';

@Component({
  selector: 'app-results-with-map',
  templateUrl: './results-with-map.component.html',
  styleUrls: ['./results-with-map.component.css']
})
export class ResultsWithMapComponent implements OnInit {

  tweets: Tweet[];
  @Input() formData: FormData;
  initalCenterLatitude = 46.332424;
  initalCenterLongitude = 2.364239;
  initalZoom = 5;
  showUser: boolean;

  constructor(private twisaApiService: TwisaApiService, private formDataService: FormDataService ) { }

  ngOnInit() {
    this.getTweets();
    this.formData = this.formDataService.getFormData();
    this.showUser = this.formData.selectedAttributes.includes(SelectAttribute.User);
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

  getLanguageType(lang: string): LanguageType {
    switch (lang) {
        case 'de':
            return LanguageType.DE;
        case 'en':
            return LanguageType.EN;
        case 'ru':
            return LanguageType.RU;
        case 'es':
            return LanguageType.ES;
        default:
            console.log('No LanguageType found for ( ' + lang + ')');
            break;
    }
  }

  getSourceType(source: string): SourceType {
    if (source.includes('Twitter Web Client')) {
        return SourceType.WebClient;
    } else if (source.includes('Twitter for Android')) {
        return SourceType.Android;
    } else if (source.includes('Twitter for iPhone')) {
        return SourceType.Apple;
    }
  }

}
