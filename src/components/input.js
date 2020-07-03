import React from 'react';
import {TextInput, I18nManager} from 'react-native';
import I18n from '../i18n.js';

const Input = (props) => {
  const {
    multiline,
    secureTextEntry,
    editable,
    style,
    value,
    maxLength,
    onChangeText,
    placeholder,
    placeholderTextColor,
    keyboardType,
    returnKeyType,
  } = props;

  return (
    <TextInput
      style={[
        style,
        {
          height: 40,
          borderColor: 'gray',
          borderBottomWidth: 1,
          textAlign: I18nManager.isRTL ? 'right' : 'left',
        },
      ]}
      onChangeText={onChangeText}
      value={value}
      maxLength={maxLength}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      placeholder={I18n.t(placeholder)}
      placeholderTextColor={placeholderTextColor}
      editable={editable}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
    />
  );
};

export default Input;
