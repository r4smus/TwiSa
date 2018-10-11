import { User } from './user';

export class Tweet {
    public id: number;
    public text: string;
    public lang: string;
    public user: User;
    public latitude: number;
    public longitude: number;
    public source: string;
    public hashtag: string;

}
