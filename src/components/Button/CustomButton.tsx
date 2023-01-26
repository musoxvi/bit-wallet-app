import React from 'react';
import {
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colors} from '../../theme/colors';
import {CustomText} from '../Text';
import {styles} from './CustomButton.styles';

interface CustomButtonProps extends PressableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = React.memo(
  ({title, icon, disabled, style, ...props}) => {
    return (
      <Pressable
        {...props}
        disabled={disabled}
        style={({pressed}) => [
          styles.button,
          pressed && {
            backgroundColor: colors.institutional.purple.dark,
          },
          disabled && {
            backgroundColor: colors.grey.main,
          },
          style && style,
        ]}>
        <CustomText>{title}</CustomText>
        {icon && <View style={styles.icon}>{icon}</View>}
      </Pressable>
    );
  },
);
