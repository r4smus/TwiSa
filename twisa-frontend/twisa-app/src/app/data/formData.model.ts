import { SelectAttribute } from '../enums/select-attribute';

export class FormData {
    selectedAttributes: Array<SelectAttribute> = [];
    tweetLanguages: Array<string> = [];
}


export class Conditions {
    tweetLanguages: Array<string> = [];
}
