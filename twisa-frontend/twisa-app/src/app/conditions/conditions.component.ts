import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../data/form-data.service';
import { Conditions } from '../data/formData.model';
import { Router } from '@angular/router';
import { SelectAttribute } from '../enums/select-attribute';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  conditions: Conditions;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    console.log(this.formDataService.getSelectAttributes());
    this.conditions = new Conditions();
  }

  saveAndRoute(): void {
    this.formDataService.setConditions(this.conditions);
    if (this.formDataService.getSelectAttributes().includes(SelectAttribute.Map)) {
      this.router.navigate(['/resultsWithMap']);
    } else {
      this.router.navigate(['/results']);
    }
  }

  addLanguage(lang: string): void {
    this.conditions.tweetLanguages.push(lang);
  }

}
