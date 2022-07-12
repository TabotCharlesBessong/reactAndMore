import { LOCALES } from '../constants';

export default {
	[LOCALES.FRENCH]: {
		
			'hello': 'Bienvenue dans le tutoriel React Intl','subscribe-invite': 'Bien sûr, {name}. Je vais mabonner à votre chaîne !',
		menu: {
			home: "Accueil",
			blog: "Blog",
			about: "À propos de moi",
			contacts: "Contacts",
		},
		form: {
			name: "Tapez Votre nom",
			dogs: "Combien de chiens  avez vous ?",
			country: {
				us: "États-Unis",
				france: "France",
				ukraine: "Ukraine",
				other: "Autre",
			},
		},
		richtext: "J'ai <bold>{num, plural, one {# dog} other {# dogs}}</bold>",
	},
};
