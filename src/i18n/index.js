import { createI18n } from 'vue-i18n';

import ko from './locales/ko.json';
import en from './locales/en.json';

const messages = {
	ko,
	en
};

export default createI18n({
	legacy: false,
	locale: 'ko',
	fallbackLocale: 'en',
	messages
});