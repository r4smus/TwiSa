import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../data/form-data.service';
import { Conditions } from '../data/formData.model';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';
import { LanguageType } from '../enums/language-type';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  conditions: Conditions;
  minValueFollowerRange = 0;
  maxValueFollowerRange = 2000000;
  optionsFollowerRange: Options = {
    floor: 0,
    ceil: 2000000,
    step: 10
  };
  minValueTweetsCount = 0;
  maxValueTweetsCount = 100000;
  optionsTweetsCount: Options = {
    floor: 0,
    ceil: 100000,
    step: 10
  };
  hashtag = '#';
  fromCreatedAt: string;
  toCreatedAt: string;


  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.conditions = new Conditions();
  }

  saveAndRoute(): void {
    if(this.conditions.tweetLanguages.length === 0){
      this.conditions.tweetLanguages.push(LanguageType.DE.shortForm);
      this.conditions.tweetLanguages.push(LanguageType.EN.shortForm);
      this.conditions.tweetLanguages.push(LanguageType.RU.shortForm);
      this.conditions.tweetLanguages.push(LanguageType.ES.shortForm);
    }
    this.conditions.followerRange = [this.minValueFollowerRange, this.maxValueFollowerRange];
    this.conditions.tweetCountRange = [this.minValueTweetsCount, this.maxValueTweetsCount];
    // ensure that there are no undefined values in the created at range.
    // if(this.fromCreatedAt === undefined){
    //   this.fromCreatedAt = '01/01/1900';
    // }
    // if(this.toCreatedAt === undefined) {
    //   this.toCreatedAt = '01/01/2099';
    // }
    this.conditions.createdAtRange = [this.fromCreatedAt, this.toCreatedAt];
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
