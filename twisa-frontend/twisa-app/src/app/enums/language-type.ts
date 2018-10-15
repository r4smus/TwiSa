export class LanguageType {
    private static AllValues: { [name: string]: LanguageType } = {};

    static readonly DE = new LanguageType(1, 'German', 'assets/images/flags/flag_germany.png', 'de');
    static readonly EN = new LanguageType(2, 'English', 'assets/images/flags/flag_uk.png', 'en');
    static readonly RU = new LanguageType(3, 'Russian', 'assets/images/flags/flag_russia.png', 'ru');
    static readonly ES = new LanguageType(3, 'Spanish', 'assets/images/flags/flag_spain.png', 'es');

    private constructor(public readonly id: number, public readonly name: string, public readonly imagePath: string, public readonly shortForm) {}

    public static parseEnum(data: string): LanguageType {
        return LanguageType.AllValues[data];
    }
}
