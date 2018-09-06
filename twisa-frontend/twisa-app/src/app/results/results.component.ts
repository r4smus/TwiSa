import { Component, OnInit } from '@angular/core';
import { TwisaApiService } from '../twisa-api.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  tweets: Tweet[];

  constructor(private twisaApiService: TwisaApiService,) { }

  ngOnInit() {
    this.getTweets();
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
