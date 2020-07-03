import React from 'react';
import {TextInput} from 'react-native';

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
      style={[style, {height: 40, borderColor: 'gray', borderBottomWidth: 1}]}
      onChangeText={onChangeText}
      value={value}
      maxLength={maxLength}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      ref={(r) => (this.ref = r)}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      editable={editable}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
    />
  );
};

export default Input;
