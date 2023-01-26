import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CustomText} from '../Text';
import {gradientColors, widgetStyles} from './Widget.styles';
import {IWidgetProps} from './Widget.types';

export const Widget: React.FC<IWidgetProps> = ({
  title,
  style,
  headerStyles,
  titleAlign = 'left',
  testId,
  children,
  contentStyle,
  colors,
  start,
  end,
  ...rest
}) => {
  const styles = widgetStyles;

  const defaultProps = {
    colors: colors ?? gradientColors,
    start: start ?? {x: 0, y: 0},
    end: end ?? {x: 0.5, y: -1.4},
    style: [styles.container, style],
  };

  return (
    <LinearGradient {...{...defaultProps, ...rest}} testID={testId}>
      <View style={[styles.header, headerStyles]}>
        {title && (
          <CustomText type="h3" style={{textAlign: titleAlign}}>
            {title}
          </CustomText>
        )}
        <View style={contentStyle}>{children}</View>
      </View>
    </LinearGradient>
  );
};
