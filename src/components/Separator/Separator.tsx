import React from 'react';
import {ViewStyle, View} from 'react-native';
import {separatorStyles} from './Separator.styles';

export const Separator: React.FC<{
  style?: ViewStyle;
}> = React.memo(({style}) => {
  return <View style={[separatorStyles.line, style]} />;
});
