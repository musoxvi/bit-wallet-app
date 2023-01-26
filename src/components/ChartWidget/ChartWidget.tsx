import React from 'react';
import Lottie from 'lottie-react-native';
import {Dimensions, StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-wagmi-charts';

import {ECurrency, IRates, Variation} from '../../types/currency';
import {amountFormatter} from '../../utils/currency';

import {spacing} from '../../utils/spacing';
import {DateText} from '../DateText/DateText';
import {PriceText} from '../PriceText/PriceText';
import {Widget} from '../Widget';
import {chartWidgetStyles} from './ChartWidget.style';

const {width: windowWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  chart: {
    marginTop: spacing(2),
  },
});

export const ChartWidget: React.FC<{
  color?: string;
  width?: number;
  loading: boolean;
  variation?: Variation;
  rates?: IRates;
  chartData?: {
    timestamp: number;
    value: number;
  }[];
}> = ({color, width, loading, chartData, variation, rates}) => {
  const getVariation = (variation && variation[ECurrency.USD]) ?? 0;

  if (!chartData?.length || loading) {
    return (
      <Widget>
        <View style={chartWidgetStyles.lottie}>
          <Lottie
            source={require('../../assets/lottie/8517-charts.json')}
            autoPlay
            loop
          />
        </View>
      </Widget>
    );
  }

  return (
    <Widget title="Line Chart" end={{x: 0.5, y: -0.3}}>
      <LineChart.Provider data={chartData}>
        <View style={chartWidgetStyles.loadingContainer}>
          <View style={chartWidgetStyles.price}>
            <PriceText
              symbol={ECurrency.BTC}
              currency={ECurrency.BTC}
              lastPrice={amountFormatter({
                value: rates ? rates.USD_BUY : 0,
                isCrypto: true,
              })}
            />
            <DateText
              variation={getVariation}
              isPositiveVariation={getVariation >= 0}
              dateFormat={'dd/MM/yy - hh:mm'}
            />
          </View>
          <LineChart
            width={width ?? windowWidth}
            height={spacing(25)}
            style={styles.chart}>
            <LineChart.Path color={color} width={2}>
              <LineChart.Gradient color={`${color}10`} />
              <LineChart.HorizontalLine at={{index: 0}} />
            </LineChart.Path>
            <LineChart.CursorLine />
            <LineChart.CursorCrosshair color={color} />
          </LineChart>
        </View>
      </LineChart.Provider>
    </Widget>
  );
};
