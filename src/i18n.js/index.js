import I18n from 'react-native-i18n';
import ar from './locales/ar';
import en from './locales/en';
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//if language not exists
I18n.fallbacks = true;

//If string not matched
I18n.missingBehaviour = 'guess';

const getLang = async () => {
  try {
    const value = await AsyncStorage.getItem('localeCode');
    console.log('value', value);
    console.log('currentLocale: ', currentLocale);
    if (value !== null) {
      currentLocale = value;
      I18n.locale = value;
      //to check if language is RTL
      const isRTL = currentLocale.indexOf('ar') === 0 ? true : false;
      I18nManager.forceRTL(isRTL);
    } else {
      let currentLocale = I18n.currentLocale();
      I18n.locale = value;
      AsyncStorage.setItem('localeCode', currentLocale);
      const isRTL = currentLocale.indexOf('ar') === 0 ? true : false;
      I18nManager.forceRTL(isRTL);
    }
  } catch (err) {}
};

getLang();

I18n.translations = {
  en,
  ar,
};

export default I18n;
