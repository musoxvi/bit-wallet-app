import React, {FC} from 'react';
import {textStyles} from './Text.style';
import {Text as NativeText} from 'react-native';
import {CustomTextProps, ETextType} from './Text.types';
import {colors} from '../../theme/colors';

export const CustomText: FC<CustomTextProps> = ({
  children,
  type = 'body4',
  style,
  textColor = colors.neutral.white,
  ...rest
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <NativeText
      style={[
        textStyles[type as keyof typeof ETextType],
        {color: textColor},
        {...passedStyles},
      ]}
      {...rest}>
      {children}
    </NativeText>
  );
};
