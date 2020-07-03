import React, {Component} from 'react';
import {View, TouchableOpacity, Image, I18nManager} from 'react-native';
import {TextView, Input, Button} from '../components';
import {images} from '../assets';
import Styles from '../styles';
import I18n from '../i18n';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: true,
    };
    this.setDefaultLanguage();
  }

  componentDidMount = () => {
    //AsyncStorage.removeItem('localeCode');
    console.log('isRTL: ', I18nManager.isRTL);
  };

  setDefaultLanguage = async () => {
    const {currentLanguage} = this.state;
    const value = await AsyncStorage.getItem('localeCode');
    console.log('value un storage componentDidMount: ', value);
    if (value !== null) {
      if (value.indexOf('ar') === 0) {
        //if user has set arabic
        I18n.locale = 'ar';
        this.setState({currentLanguage: !currentLanguage});
      } else {
        // if user has set english
        I18n.locale = 'en';
        this.setState({currentLanguage: !currentLanguage});
      }
    }
  };

  restart = () => {
    RNRestart.Restart();
  };

  onLanguageChange = async (languageCode) => {
    await AsyncStorage.setItem('localeCode', languageCode);
    const isRTL = languageCode.indexOf('ar') === 0 ? true : false;
    I18nManager.forceRTL(isRTL);
    this.restart();
  };

  render() {
    const {navigation} = this.props;
    console.log('while render', I18n.locale);
    return (
      <View style={Styles.container}>
        {/* logo */}
        <Image
          source={images.logo}
          style={{width: 270, height: 100, alignSelf: 'center'}}
        />

        {/* input fields */}
        <TextView
          style={{
            width: '90%',
            textAlign: 'center',
            marginVertical: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          {I18n.t('welcome')}
        </TextView>

        <Input style={Styles.input} placeholder="Enter username" />
        <Input
          style={Styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
        />

        {/* forgot password */}
        <TouchableOpacity onPress={null} style={{width: '90%', marginTop: 5}}>
          <TextView
            style={{
              alignSelf: 'flex-end',
            }}>
            Forgot Password?
          </TextView>
        </TouchableOpacity>

        {/* login button     */}
        <Button title="LOGIN" style={{marginTop: 20}} />

        {/* singup text view     */}
        <View
          style={{alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
          <TextView style={{textAlign: 'center', width: '100%'}}>
            Not a member yet?{' '}
            <TextView
              onPress={() => navigation.navigate('Signup')}
              style={{color: 'blue'}}>
              Signup
            </TextView>
          </TextView>
        </View>

        {/* languages buttons */}
        <View
          style={{
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Button
            onPress={() => this.onLanguageChange('ar')}
            style={{width: '20%'}}
            title="Arabic"
            disabled={I18n.locale == 'ar' ? true : false}
          />
          <Button
            onPress={() => this.onLanguageChange('en')}
            style={{width: '20%'}}
            title="English"
            disabled={I18n.locale == 'en' ? true : false}
          />
        </View>
      </View>
    );
  }
}

export default Login;
