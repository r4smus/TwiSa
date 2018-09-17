import { User } from './user';

export class Tweet {
    public id: number;
    public text: string;
    public lang: string;
    public user: User;
    public latitude: number;
    public longitude: number;
    public source: string;

    constructor(id: number, text: string, lang: string, user: User, latitude: number, longitude: number, source: string) {
        this.id = id;
        this.text = text;
        this.lang = lang;
        this.user = user;
        this.latitude = latitude;
        this.longitude = longitude;
        this.source = source;
    }
}
