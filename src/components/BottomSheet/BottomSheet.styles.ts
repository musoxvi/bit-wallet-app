import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/colors';
import {spacing} from '../../utils/spacing';

export const MODAL_EXTRA_MARGIN = spacing(3);

export const styles = StyleSheet.create({
  none: {
    display: 'none',
  },
  modalBackground: {
    backgroundColor: colors.grey.dark,
  },
  contentContainerStyle: {
    paddingBottom: spacing(3),
    paddingHorizontal: spacing(2),
    backgroundColor: colors.grey.dark,
  },
  handlerContainer: {
    backgroundColor: colors.grey.dark,
    borderTopLeftRadius: normalize(14),
    borderTopRightRadius: normalize(14),
  },
  sheetContainer: {
    marginHorizontal: spacing(2),
  },
});
