import { LOCALES } from '../constants';

export default {
	[LOCALES.ENGLISH]: {
		"hello": "Willkommen beim React Intl-Tutorial",
		"subscribe-invite": "Sicher, {name}. Ich werde deinen Kanal abonnieren!",
		menu: {
			home: "Home",
			blog: "Blog",
			about: "About me",
			contacts: "Contacts",
		},
		form: {
			name: "Type your name",
			dogs: "How many dogs you have?",
			country: {
				us: "United States",
				france: "France",
				ukraine: "Ukraine",
				other: "Other",
			},
		},
		richtext: "I have <bold>{num, plural, one {# dog} other {# dogs}}</bold>",
	},
};
