export class SourceType {
    private static AllValues: { [name: string]: SourceType } = {};

    static readonly WebClient = new SourceType(1, 'Twitter Web Client', 'assets/images/source_types/web_client.png');
    static readonly Android = new SourceType(2, 'Twitter for Android', 'assets/images/source_types/android.png');
    static readonly Apple = new SourceType(3, 'Twitter for iPhone', 'assets/images/source_types/apple.png');
    static readonly NotFound = new SourceType(4, 'Not Found!', 'assets/images/source_types/not_found.png');

    private constructor(public readonly id: number, public readonly name: string, public readonly imagePath: string) {}

    public static parseEnum(data: string): SourceType {
        return SourceType.AllValues[data];
    }
}
