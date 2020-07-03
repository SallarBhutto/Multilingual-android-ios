import I18n from 'react-native-i18n';
import ar from './locales/ar';
import en from './locales/en';
import {I18nManager, NativeModules, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//if language not exists
I18n.fallbacks = true;

//If string not matched
I18n.missingBehaviour = 'guess';

// const getDefaultLocale = async () => {
//   try {
//     const value = await AsyncStorage.getItem('localeCode');
//     console.log('value un storage in 118n: ', value);
//     if (value !== null) {
//       const isRTL = value.indexOf('ar') === 0 ? true : false; //if value is 'en' then it isRTL will be false
//       I18nManager.forceRTL(isRTL);
//       console.log('isRTL: ', I18nManager.isRTL);
//       console.log('final locale in getLang 118n: ', I18n.locale);
//     } else {
//       // if user is opening the app first time
//       let currentLocale = I18n.currentLocale();
//       await AsyncStorage.setItem('localeCode', currentLocale);
//       console.log('currentLocale 118n: ', currentLocale);
//       console.log(
//         'check 118n: ',
//         currentLocale.indexOf('ar') === 0 ? true : false,
//       );
//       const isRTL = currentLocale.indexOf('ar') === 0 ? true : false;
//       I18nManager.forceRTL(isRTL);
//     }
//   } catch (err) {}
// };

// getDefaultLocale();

I18n.translations = {
  en,
  ar,
};

export default I18n;
