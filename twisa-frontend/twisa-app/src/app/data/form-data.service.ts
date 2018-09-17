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
      tweetLanguages: this.formData.tweetLanguages
    };
    return conditions;
  }

  setConditions(data: Conditions) {
    this.formData.tweetLanguages = data.tweetLanguages;
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  languageSelected(): boolean {
    return this.formData.tweetLanguages == null;
}
}
