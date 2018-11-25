import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/form-data.service';
import { FormData } from '../data/formData.model';
import { SourceType } from '../enums/source-type';
import { LanguageType } from '../enums/language-type';
import { SelectAttribute } from '../enums/select-attribute';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-twitter-item',
  templateUrl: './twitter-item.component.html',
  styleUrls: ['./twitter-item.component.css']
})
export class TwitterItemComponent implements OnInit {

  @Input() tweet: Tweet;
  @Input() formData: FormData;
  showUser: boolean;
  showSource: boolean;
  showLanguage: boolean;
  showHashtag: boolean;
  showText: boolean;
  showFollowerCount: boolean;
  showTweetsCount: boolean;
  showCreatedAt: boolean;
  showDescription: boolean;
  userAttLabelText = 'User Attributes';
  generalAttLabelText = 'General Attributes';

  constructor(private formDataService: FormDataService ) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.showUser = this.checkShowUser();
    this.showSource = this.formData.selectedAttributes.includes(SelectAttribute.TweetSource);
    this.showLanguage = this.formData.selectedAttributes.includes(SelectAttribute.Language);
    this.showHashtag = this.formData.selectedAttributes.includes(SelectAttribute.Hashtag);
    this.showText = this.formData.selectedAttributes.includes(SelectAttribute.TweetText);
    this.showFollowerCount = this.formData.selectedAttributes.includes(SelectAttribute.FollowerCount);
    this.showTweetsCount = this.formData.selectedAttributes.includes(SelectAttribute.TweetsCount);
    this.showCreatedAt = this.formData.selectedAttributes.includes(SelectAttribute.CreatedAt);
    this.showDescription = this.formData.selectedAttributes.includes(SelectAttribute.Description);
  }




  getLanguageType(lang: string): LanguageType {
    switch (lang) {
        case 'de':
            return LanguageType.DE;
        case 'en':
            return LanguageType.EN;
        case 'ru':
            return LanguageType.RU;
        case 'es':
            return LanguageType.ES;
        default:
            break;
    }
  }

  getSourceType(source: string): SourceType {
    if (source.includes('Twitter Web Client')) {
        return SourceType.WebClient;
    } else if (source.includes('Twitter for Android')) {
        return SourceType.Android;
    } else if (source.includes('Twitter for iPhone')) {
        return SourceType.Apple;
    } else {
        return SourceType.NotFound;
    }
  }

  displayHashtag(hashtag: string): string {
      if (hashtag === undefined || hashtag === null) {
          return '';
      } else {
          return '#' + hashtag;
      }
  }

  private checkShowUser(): boolean {
      if (this.formData.selectedAttributes.includes(SelectAttribute.FollowerCount)) {
        return true;
      }
      if (this.formData.selectedAttributes.includes(SelectAttribute.TweetsCount)) {
        return true;
      }
      if (this.formData.selectedAttributes.includes(SelectAttribute.Description)) {
        return true;
      }
      if (this.formData.selectedAttributes.includes(SelectAttribute.CreatedAt)) {
        return true;
      }
      return false;
  }


}
