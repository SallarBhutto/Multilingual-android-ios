import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {TextView} from './index';
import I18n from '../i18n';

const Button = (props) => {
  const {title, style = {}, textStyle = {}, onPress, disabled = false} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonStyles, {...style, opacity: disabled ? 0.5 : 1}]}>
      <TextView style={{...textStyle, color: 'white'}}>
        {I18n.t(title)}
      </TextView>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyles: {
    width: '80%',
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    alignSelf: 'center',
    backgroundColor: '#4E5180',
  },
});
