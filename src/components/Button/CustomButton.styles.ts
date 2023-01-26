import {StyleSheet} from 'react-native';

import normalize from 'react-native-normalize';
import {colors} from '../../theme/colors';

import {spacing} from '../../utils/spacing';

export const styles = StyleSheet.create({
  button: {
    paddingHorizontal: spacing(3),
    height: spacing(6),
    borderRadius: normalize(55),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.institutional.purple.main,
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: spacing(1),
  },
});
