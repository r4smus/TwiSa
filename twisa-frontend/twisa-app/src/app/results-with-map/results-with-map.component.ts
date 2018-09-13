import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet';
import { TwisaApiService } from '../twisa-api.service';
import { FormDataService } from '../data/form-data.service';
import { FormData } from '../data/formData.model';

@Component({
  selector: 'app-results-with-map',
  templateUrl: './results-with-map.component.html',
  styleUrls: ['./results-with-map.component.css']
})
export class ResultsWithMapComponent implements OnInit {

  tweets: Tweet[];
  @Input() formData: FormData;

  constructor(private twisaApiService: TwisaApiService, private formDataService: FormDataService ) { }

  ngOnInit() {
    this.getTweets();
    this.formData = this.formDataService.getFormData();
    console.log(this.formData);
  }


  getTweets(): void {
    this.twisaApiService.getTweets()
      .then(tweets => this.tweets = tweets.filter(tweet => this.formData.tweetLanguages.includes(tweet.lang)));
  }

}
