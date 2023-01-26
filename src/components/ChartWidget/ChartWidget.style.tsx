import {StyleSheet} from 'react-native';

import normalize from 'react-native-normalize';

export const chartWidgetStyles = StyleSheet.create({
  price: {
    alignItems: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: normalize(250),
  },
  lottie: {
    height: normalize(200),
    width: '100%',
  },
});
