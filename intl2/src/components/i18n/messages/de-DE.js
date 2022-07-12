import { LOCALES } from '../constants';

export default {
	[LOCALES.GERMAN]: {
		hello: "Hallo",
		menu: {
			home: "Zuhause",
			blog: "Blog",
			about: "Über mich",
			contacts: "Kontakte",
		},
		form: {
			name: "Gib deinen Namen ein",
			dogs: "Wie Viele Hunde hast du ?",
			country: {
				us: "Vereinigte Staaten",
				france: "Frankreich",
				ukraine: "Ukraine",
				other: "Andere",
			},
		},
		richtext: "Ich Habe <bold>{num, plural, one {# dog} other {# dogs}}</bold>",
	},
};
