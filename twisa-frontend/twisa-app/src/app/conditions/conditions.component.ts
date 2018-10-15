import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../data/form-data.service';
import { Conditions } from '../data/formData.model';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  conditions: Conditions;
  minValue = 0;
  maxValue = 20000;
  options: Options = {
    floor: 0,
    ceil: 20000,
    step: 100
  };
  hashtag: string;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    console.log(this.formDataService.getSelectAttributes());
    this.conditions = new Conditions();
  }

  saveAndRoute(): void {
    this.conditions.followerRange = [this.minValue, this.maxValue];
    this.conditions.hashtag = this.hashtag;
    this.formDataService.setConditions(this.conditions);
    if (this.formDataService.showMap()) {
      this.router.navigate(['/resultsWithMap']);
    } else {
      this.router.navigate(['/results']);
    }
  }

  addLanguage(lang: string): void {
    this.conditions.tweetLanguages.push(lang);
  }

}
