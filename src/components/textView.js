import React from 'react';
import {Text} from 'react-native';
import I18n from '../i18n';

const TextView = (props) => {
  const {text, style = {}, onPress} = props;
  return (
    <Text onPress={onPress} style={[{fontSize: 16, ...style}]}>
      {props.children}
    </Text>
  );
};

export default TextView;
