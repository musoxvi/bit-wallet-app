import React from 'react';
import {LineChart} from 'react-native-wagmi-charts';

import {priceTextStyles} from './PriceText.styles';
import {IPriceTextProps} from './PriceText.types';

export const formatPrice = (value: string | number) => {
  'worklet';
  const castedValue = String(value);
  const [intPart, floatPart] = castedValue.split('.');
  return `${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${
    floatPart ? floatPart : '00'
  }`;
};

export const PriceText: React.FC<IPriceTextProps> = ({lastPrice, symbol}) => {
  return (
    <LineChart.PriceText
      style={priceTextStyles.usdRateLabel}
      precision={2}
      format={({value}) => {
        'worklet';
        const formattedPrice = value
          ? formatPrice(parseFloat(value))
          : lastPrice;
        return `${formattedPrice} ${symbol}`;
      }}
    />
  );
};
