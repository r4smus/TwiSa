import { User } from './user';
import { Coordinates } from './coordinates';

export class Tweet {
    public id: number;
    public text: string;
    public lang: string;
    public user: User;
    public coordinates: Coordinates;
    public source: string;
    public hashtag: string;

}
