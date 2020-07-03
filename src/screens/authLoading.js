import React, {Component} from 'react';
import {View, ActivityIndicator, Image, I18nManager} from 'react-native';
import {images} from '../assets';
import Styles from '../styles';
import I18n from '../i18n';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: true,
    };
    this.getDefaultLocale();
  }

  componentDidMount = () => {};

  getDefaultLocale = async () => {
    const {navigation} = this.props;
    try {
      const value = await AsyncStorage.getItem('localeCode');
      console.log('value un storage in 118n: ', value);
      if (value !== null) {
        const isRTL = value.indexOf('ar') === 0 ? true : false; //if value is 'en' then it isRTL will be false
        I18nManager.forceRTL(isRTL);
        console.log('isRTL: ', I18nManager.isRTL);
        console.log('final locale in getLang 118n: ', I18n.locale);
        navigation.navigate('Login');
      } else {
        // if user is opening the app first time
        let currentLocale = I18n.currentLocale();
        await AsyncStorage.setItem('localeCode', currentLocale);
        console.log('currentLocale 118n: ', currentLocale);
        console.log(
          'check 118n: ',
          currentLocale.indexOf('ar') === 0 ? true : false,
        );
        const isRTL = currentLocale.indexOf('ar') === 0 ? true : false;
        I18nManager.forceRTL(isRTL);
        navigation.navigate('Login');
      }
    } catch (err) {}
  };

  render() {
    const {navigation} = this.props;
    console.log('while render', I18n.locale);
    return (
      <View style={Styles.container}>
        <Image
          source={images.logo}
          style={{width: 270, height: 100, alignSelf: 'center'}}
        />
        <ActivityIndicator size="large" color="#4E5180" />
      </View>
    );
  }
}

export default AuthLoading;
