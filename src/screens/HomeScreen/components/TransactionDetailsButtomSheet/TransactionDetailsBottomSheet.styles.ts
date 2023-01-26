import {StyleSheet} from 'react-native';

import {colors} from '../../../../theme/colors';
import {spacing} from '../../../../utils/spacing';

export const ICON_STATUS_SIZE = spacing(3);

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey.dark,
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing(2),
  },
  column: {
    padding: spacing(1),
  },
  headerDetail: {
    paddingLeft: spacing(2),
  },
});
