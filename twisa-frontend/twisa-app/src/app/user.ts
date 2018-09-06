export class User {

    public id: number;
    public name: string;
    public follower_count: number;
    public profile_image_url: string;

    constructor(id: number, name: string, follower_count: number, profile_image_url: string){
        this.id = id;
        this.name = name;
        this.follower_count = follower_count;
        this.profile_image_url = profile_image_url;
    }

}