import { SelectAttribute } from '../enums/select-attribute';

export class FormData {
    selectedAttributes: Array<SelectAttribute> = [];
    tweetLanguages: Array<string> = [];
    showMap: boolean;
    followerRange: [number, number];
    hashtag: string;
}


export class Conditions {
    tweetLanguages: Array<string> = [];
    followerRange: [number, number];
    hashtag: string;
}
