import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Platform, StatusBar} from 'react-native';
import {TextView, Input, Button} from '../components';
import {images, icons} from '../assets';
import Styles from '../styles';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        {/* Back icon */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: Platform.OS == 'ios' ? 40 : StatusBar.currentHeight,
            left: 5,
          }}>
          <Image
            source={icons.back}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        {/* logo */}
        <Image
          source={images.logo}
          style={{
            width: 270,
            height: 100,
            alignSelf: 'center',
            marginBottom: 10,
          }}
        />

        {/* input fields */}
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

        {/* SIGNUP button     */}
        <Button title="SIGNUP" style={{marginTop: 20}} />
      </View>
    );
  }
}

export default Signup;
