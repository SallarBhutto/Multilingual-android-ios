import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {I18nManager, NativeModules, Platform} from 'react-native';
import Navigation from './src/services/navigation';
import I18n from './src/i18n';
import AsyncStorage from '@react-native-community/async-storage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Navigation />;
  }
}

export default App;
