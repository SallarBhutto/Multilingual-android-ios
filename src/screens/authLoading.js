import React, {Component} from 'react';
import {View, ActivityIndicator, Image, I18nManager} from 'react-native';
import {images} from '../assets';
import Styles from '../styles';
import I18n from '../i18n';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getDefaultLocale();
  }

  getDefaultLocale = async () => {
    const {navigation} = this.props;
    try {
      const value = await AsyncStorage.getItem('localeCode');
      if (value !== null) {
        let isRTL = value.indexOf('ar') === 0 ? true : false; //if value is 'en' then value.indexOf('ar') will be false
        I18nManager.forceRTL(isRTL);
        I18n.locale = value;
        navigation.navigate('Login');
        // setTimeout(() => {
        //   navigation.navigate('Login');
        // }, 500);
      } else {
        // if user is opening the app first time
        let currentLocale = I18n.locale;
        await AsyncStorage.setItem('localeCode', currentLocale);
        let isRTL = currentLocale.indexOf('ar') === 0 ? true : false;
        I18nManager.forceRTL(isRTL);
        navigation.navigate('Login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
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
