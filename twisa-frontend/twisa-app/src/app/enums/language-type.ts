export class LanguageType {

    static readonly DE = new LanguageType(1, 'German', 'assets/images/flags/flag_germany.png', 'de');
    static readonly EN = new LanguageType(2, 'English', 'assets/images/flags/flag_uk.png', 'en');
    static readonly RU = new LanguageType(3, 'Russian', 'assets/images/flags/flag_russia.png', 'ru');
    static readonly ES = new LanguageType(4, 'Spanish', 'assets/images/flags/flag_spain.png', 'es');
    static readonly FR = new LanguageType(5, 'French', 'assets/images/flags/flag_france.png', 'fr');
    static readonly IT = new LanguageType(6, 'Italian', 'assets/images/flags/flag_italy.png', 'it');
    static readonly PO = new LanguageType(7, 'Portuguese', 'assets/images/flags/flag_portugal.png', 'po');

    private constructor(public readonly id: number, public readonly name: string,
        public readonly imagePath: string, public readonly shortForm) {}

    public static AllValues(): LanguageType[] {
        return [LanguageType.DE, LanguageType.EN, LanguageType.RU, LanguageType.ES, LanguageType.FR, LanguageType.IT, LanguageType.PO];
    }

}
