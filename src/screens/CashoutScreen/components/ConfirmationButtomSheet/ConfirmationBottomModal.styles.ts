import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

import {colors} from '../../../../theme/colors';
import {spacing} from '../../../../utils/spacing';

export const ICON_SIZE = spacing(3);

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey.dark,
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    padding: spacing(1),
  },
  headerDetail: {
    paddingLeft: spacing(2),
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: spacing(3),
  },
  text: {
    paddingVertical: spacing(1),
  },
  amountArs: {
    paddingBottom: spacing(2),
  },
  lottie: {
    height: normalize(200),
    width: '100%',
    marginBottom: spacing(2),
  },
  lottieSuccess: {
    height: normalize(250),
    width: '100%',
    marginBottom: spacing(2),
  },
});
