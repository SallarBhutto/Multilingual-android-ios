import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {TextView, Input, Button} from '../components';
import {images} from '../assets';
import Styles from '../styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oho: false,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          width: '100%',
          backgroundColor: 'white',
        }}>
        <Image
          source={images.logo}
          style={{width: 270, height: 100, alignSelf: 'center'}}
        />
        <TextView
          style={{
            width: '100%',
            textAlign: 'center',
            //fontSize: 30,
            marginVertical: 20,
            fontWeight: 'bold',
            //color: 'grey',
          }}>
          Welcome to Code-along session 3rd July 2020
        </TextView>
        <Input style={Styles.input} placeholder="Enter username" />
        <Input
          style={Styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={null} style={{width: '90%', marginTop: 5}}>
          <TextView
            style={{
              alignSelf: 'flex-end',
            }}>
            Forgot Password?
          </TextView>
        </TouchableOpacity>

        <Button title="LOGIN" style={{marginTop: 20}} />

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
      </View>
    );
  }
}

export default Login;
