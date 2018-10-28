export class SelectAttribute {
    private static AllValues: { [name: string]: SelectAttribute } = {};

    static readonly Map = new SelectAttribute(1, 'Map', 'assets/images/select_attributes/Maps-icon.png');
    static readonly TweetText = new SelectAttribute(2, 'Tweet-Text', 'assets/images/select_attributes/tweet-text.png');
    static readonly TweetSource = new SelectAttribute(3, 'Tweet-Source', 'assets/images/select_attributes/datasource.png');
    static readonly FollowerCount = new SelectAttribute(4, 'Follower-Count', 'assets/images/select_attributes/follower_count.png');
    static readonly TweetsCount = new SelectAttribute(4, 'Tweets-Count', 'assets/images/select_attributes/tweets_count.png');
    static readonly CreatedAt = new SelectAttribute(4, 'Account Created-At', 'assets/images/select_attributes/created_at.png');
    static readonly Description = new SelectAttribute(4, 'Description', 'assets/images/select_attributes/user_description.png');
    static readonly Language = new SelectAttribute(5, 'Language', 'assets/images/select_attributes/language-icon.png');
    static readonly Hashtag = new SelectAttribute(6, 'Hashtag', 'assets/images/select_attributes/hashtag-80.png');

    private constructor(public readonly id: number, public readonly name: string, public readonly imagePath: string) {}

    public static parseEnum(data: string): SelectAttribute {
        return SelectAttribute.AllValues[data];
    }
}
