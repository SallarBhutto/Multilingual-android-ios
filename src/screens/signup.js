import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {TextView, Input, Button} from '../components';
import {images} from '../assets';
import Styles from '../styles';

class Signup extends Component {
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
          style={{
            width: 270,
            height: 100,
            alignSelf: 'center',
            marginBottom: 10,
          }}
        />
        <Input style={Styles.input} placeholder="Enter username" />
        <Input
          style={Styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <Input
          style={Styles.input}
          placeholder="Confirm password"
          secureTextEntry={true}
        />

        <Button title="SIGNUP" style={{marginTop: 20}} />

        <View
          style={{alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
          <TextView style={{textAlign: 'center', width: '100%'}}>
            Already a member?{' '}
            <TextView
              onPress={() => navigation.navigate('Login')}
              style={{color: 'blue'}}>
              Go to Login
            </TextView>
          </TextView>
        </View>
      </View>
    );
  }
}

export default Signup;
