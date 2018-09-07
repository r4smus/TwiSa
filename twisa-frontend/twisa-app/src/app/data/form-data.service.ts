import { Injectable } from '@angular/core';
import { FormData, SelectAttributes, Conditions } from './formData.model';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();


  getSelectAttributes(): SelectAttributes {
    // Return the selected attributes from the first wizard page
    const selectAttributes: SelectAttributes = {
      mapSelected: this.formData.mapSelected,
      tweetTextselected: this.formData.tweetTextselected,
      tweetSourceSelected: this.formData.tweetSourceSelected
    };
    return selectAttributes;
  }

  setSelectAttributes(data: SelectAttributes) {
    this.formData.mapSelected = data.mapSelected;
    this.formData.tweetTextselected = data.tweetTextselected;
    this.formData.tweetSourceSelected = data.tweetSourceSelected;
  }

  getConditions(): Conditions {
    const conditions: Conditions = {
      tweetLanguage: this.formData.tweetLanguage
    };
    return conditions;
  }

  setConditions(data: Conditions) {
    this.formData.tweetLanguage = data.tweetLanguage;
  }
}
