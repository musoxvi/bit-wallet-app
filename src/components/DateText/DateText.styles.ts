import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {spacing} from '../../utils/spacing';

export const dateTextStyles = StyleSheet.create({
  labelH3: {
    top: spacing(3),
  },
  usdRateLabel: {
    color: colors.neutral.white,
    fontSize: spacing(3),
    height: 8,
    fontFamily: 'Lato-Bold',
    lineHeight: 30,
  },
});
