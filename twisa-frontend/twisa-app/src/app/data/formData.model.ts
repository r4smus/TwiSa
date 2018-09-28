import { SelectAttribute } from '../enums/select-attribute';

export class FormData {
    selectedAttributes: Array<SelectAttribute> = [];
    tweetLanguages: Array<string> = [];
    showMap: boolean;
}


export class Conditions {
    tweetLanguages: Array<string> = [];
}
