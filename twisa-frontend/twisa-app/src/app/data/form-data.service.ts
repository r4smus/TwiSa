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
      tweetLanguages: this.formData.tweetLanguages,
      followerRange: this.formData.followerRange,
      tweetCountRange: this.formData.tweetCountRange,
      createdAtRange: this.formData.createdAtRange,
      hashtag: this.formData.hashtag,
      userName: this.formData.userName
    };
    return conditions;
  }

  setConditions(data: Conditions) {
    this.formData.tweetLanguages = data.tweetLanguages;
    this.formData.followerRange = data.followerRange;
    this.formData.tweetCountRange = data.tweetCountRange;
    this.formData.createdAtRange = data.createdAtRange;
    this.formData.hashtag = data.hashtag;
    this.formData.userName = data.userName;
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }
}
