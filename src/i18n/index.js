import I18n from 'react-native-i18n';
import ar from './locales/ar';
import en from './locales/en';
import {I18nManager, NativeModules, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//if language in device not exists
I18n.fallbacks = true;

//If string not matched
I18n.missingBehaviour = 'guess';

//All available translations
I18n.translations = {
  en,
  ar,
};

export default I18n;
