import { User } from './user';

export class Tweet {
    public id: number;
    public text: string;
    public lang: string;

    constructor(id: number, text: string, lang: string, user: User) {
        this.id = id;
        this.text = text;
        this.lang = lang;
    }
}
