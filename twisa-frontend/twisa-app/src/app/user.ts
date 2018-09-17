export class User {

    public id: number;
    public name: string;
    public followers_count: number;
    public profile_image_url: string;

    constructor(id: number, name: string, followers_count: number, profile_image_url: string) {
        this.id = id;
        this.name = name;
        this.followers_count = followers_count;
        this.profile_image_url = profile_image_url;
    }

}
