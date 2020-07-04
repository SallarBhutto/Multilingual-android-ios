import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Switch,
  I18nManager,
  Alert,
} from 'react-native';
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
      isRTL: true,
    };
  }

  restart = () => {
    RNRestart.Restart();
  };

  onLanguageChange = async (languageCode) => {
    await AsyncStorage.setItem('localeCode', languageCode);
    const isRTL = languageCode.indexOf('ar') === 0 ? true : false;
    I18nManager.forceRTL(isRTL);
    setTimeout(() => {
      this.restart();
    }, 500);
  };

  render() {
    const {navigation} = this.props;
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
            Forgot password?
          </TextView>
        </TouchableOpacity>

        {/* login button     */}
        <Button title="LOGIN" style={{marginTop: 20}} />

        {/* singup text view     */}
        <View
          style={{
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <TextView style={{textAlign: 'center'}}>Not a member yet? </TextView>
          <TextView
            onPress={() => navigation.navigate('Signup')}
            style={{textAlign: 'center', color: 'blue'}}>
            Signup
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
            disabled={I18n.locale.indexOf('ar') == 0 ? true : false}
          />
          <Button
            onPress={() => this.onLanguageChange('en')}
            style={{width: '20%'}}
            title="English"
            disabled={I18n.locale.indexOf('en') == 0 ? true : false}
          />
        </View>
      </View>
    );
  }
}

export default Login;
