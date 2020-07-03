import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {TextView} from './index';

const Button = (props) => {
  const {title, style = {}, hasImage, image, textStyle = {}, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonStyles, {...style}]}>
      <TextView style={{...textStyle, color: 'white'}}> {title} </TextView>
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
