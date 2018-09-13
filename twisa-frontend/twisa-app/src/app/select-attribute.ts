interface EnumIdentity {}
export class SelectAttribute implements EnumIdentity {
    private static AllValues: { [name: string] : SelectAttribute } = {};

    static readonly Map = new SelectAttribute(1, 'Map', 'assets/images/Maps-icon.png');
    static readonly TweetText = new SelectAttribute(2, 'Tweet-Text', 'assets/images/tweet-text.png');
    static readonly TweetSource = new SelectAttribute(3, 'Tweet-Source', 'assets/images/datasource.png');

    private constructor(public readonly id: number, public readonly name: string, public readonly imagePath: string) {}

    public static parseEnum(data: string) : SelectAttribute {
        return SelectAttribute.AllValues[data];
    }
}
