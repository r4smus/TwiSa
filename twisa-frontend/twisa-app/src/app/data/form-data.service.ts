import { Injectable } from '@angular/core';
import { FormData, Conditions } from './formData.model';
import { SelectAttribute } from '../select-attribute';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();


  getSelectAttributes(): Array<SelectAttribute> {
    // Return the selected attributes from the first wizard page
    return this.formData.selectedAttributes;
  }

  setSelectAttributes(data: Array<SelectAttribute>) {
    this.formData.selectedAttributes = data;
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
