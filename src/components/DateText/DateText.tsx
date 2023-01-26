import React from 'react';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {AnimatedText, LineChart} from 'react-native-wagmi-charts';

import {colors} from '../../theme/colors';

import {formatPrice} from '../PriceText/PriceText';
import {dateTextStyles} from './DateText.styles';

import {IDateTextProps} from './DateText.types';

export const DateText: React.FC<IDateTextProps> = ({
  variation,
  isPositiveVariation,
  dateFormat = '',
}) => {
  const styles = dateTextStyles;
  const selectedDate = LineChart.useDatetime({locale: 'es-ES'});
  const variationType = useSharedValue(
    isPositiveVariation ? 'positive' : 'negative',
  );
  const dateText = useSharedValue('');

  const formatTimestamp = (value: number) => {
    if (value) {
      const date = format(
        fromUnixTime(+value.toString().slice(0, 10)),
        dateFormat,
      );

      dateText.value = date;
    }
  };

  useDerivedValue(() => {
    runOnJS(formatTimestamp)(Number(selectedDate.value.value));
    if (!selectedDate.value.value && variation != null) {
      variationType.value = isPositiveVariation ? 'positive' : 'negative';
      dateText.value = `${isPositiveVariation ? '+' : ''}${formatPrice(
        variation.toFixed(2),
      )}%`;
    } else {
      variationType.value = 'not-selected';
    }
  }, [selectedDate, variationType]);

  const color = useAnimatedStyle(() => ({
    color:
      variationType.value === 'positive'
        ? colors.notification.success
        : variationType.value === 'negative'
        ? colors.notification.error
        : 'white', //colors.onSurface[100],
  }));

  return <AnimatedText text={dateText} style={[styles.labelH3, color]} />;
};
