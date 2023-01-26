import React from 'react';
import {View} from 'react-native';
import {colors} from '../../../theme/colors';
import {styles} from './BottomSheetHandleComponent.styles';

interface BottomSheetHandleComponentProps {
  color?: string;
}

export const BottomSheetHandleComponent: React.FC<
  BottomSheetHandleComponentProps
> = ({color}) => {
  return (
    <View
      style={[
        styles.handler,
        {
          backgroundColor: color ? color : colors.onSurface[100],
        },
      ]}
    />
  );
};
