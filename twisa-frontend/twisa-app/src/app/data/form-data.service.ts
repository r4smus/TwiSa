import { Injectable } from '@angular/core';
import { FormData, Conditions } from './formData.model';
import { SelectAttribute } from '../enums/select-attribute';

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

  showMap(): boolean {
    return this.formData.showMap;
  }

  setShowMap(showMap: boolean) {
    this.formData.showMap = showMap;
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

  nothingSelected(): boolean {
    return this.formData.tweetLanguages.length === 0 && this.formData.followerRange == null;
  }
}
