import { User } from './user';
import { Coordinates } from './coordinates';
import { Entities } from './hashtags/entities';

export class Tweet {
    public id: number;
    public text: string;
    public lang: string;
    public user: User;
    public coordinates: Coordinates;
    public source: string;
    public entities: Entities;

}
