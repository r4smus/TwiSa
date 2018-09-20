export class SelectAttribute {
    private static AllValues: { [name: string]: SelectAttribute } = {};

    static readonly Map = new SelectAttribute(1, 'Map', 'assets/images/select_attributes/Maps-icon.png');
    static readonly TweetText = new SelectAttribute(2, 'Tweet-Text', 'assets/images/select_attributes/tweet-text.png');
    static readonly TweetSource = new SelectAttribute(3, 'Tweet-Source', 'assets/images/select_attributes/datasource.png');
    static readonly User = new SelectAttribute(4, 'User', 'assets/images/select_attributes/user-icon.png');
    static readonly Language = new SelectAttribute(5, 'Language', 'assets/images/select_attributes/language-icon.png');

    private constructor(public readonly id: number, public readonly name: string, public readonly imagePath: string) {}

    public static parseEnum(data: string): SelectAttribute {
        return SelectAttribute.AllValues[data];
    }
}
