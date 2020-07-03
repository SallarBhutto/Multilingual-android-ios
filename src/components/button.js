import React, {Component} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {TextView} from './index';

const Button = (props) => {
  const {title, style = {}, hasImage, image, textStyle = {}, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        hasImage
          ? [style, styles.buttonType01, {flexDirection: 'row'}]
          : [styles.buttonType01, {...style}]
      }>
      {hasImage ? (
        <Image
          source={image}
          style={{width: 25, height: 25, marginLeft: -7, marginRight: 5}}
        />
      ) : null}
      <TextView style={{...textStyle, color: 'white'}}> {title} </TextView>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonType01: {
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
  buttonType02: {
    width: 100,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
