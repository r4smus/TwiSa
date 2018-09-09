import { Component, OnInit } from '@angular/core';
import { TwisaApiService } from '../twisa-api.service';
import { Tweet } from '../tweet';
import { FormDataService } from '../data/form-data.service';
import { Conditions } from '../data/formData.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  tweets: Tweet[];
  conditions: Conditions;

  constructor(private twisaApiService: TwisaApiService, private formDataService: FormDataService ) { }

  ngOnInit() {
    this.getTweets();
    this.conditions = this.formDataService.getConditions();
    console.log(this.formDataService.getSelectAttributes());
    console.log(this.formDataService.getConditions());
  }

  getTweets(): void {
    this.twisaApiService.getTweets()
      .then(tweets => this.tweets = tweets);
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
