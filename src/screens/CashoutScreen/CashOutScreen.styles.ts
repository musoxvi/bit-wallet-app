import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/colors';
import {spacing} from '../../utils/spacing';

export const NAVIGATION_ICON_WIDTH = normalize(12);
export const NAVIGATION_ICON_HEIGHT = normalize(22);

export const styles = StyleSheet.create({
  safeAreaView: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  container: {
    padding: spacing(2),
  },
  iconBTC: {
    alignSelf: 'center',
    paddingVertical: spacing(4),
  },
  centerBox: {
    justifyContent: 'center',
  },
  amountBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: spacing(3),
  },
  errorText: {
    color: colors.notification.error,
    fontSize: spacing(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing(2),
    marginBottom: spacing(3),
    alignItems: 'center',
  },
  textHeader: {
    maxWidth: normalize(200),
  },
  feeBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  transactionDetails: {
    padding: spacing(2),
  },
  confirmButtonWrapper: {
    padding: spacing(2),
  },
});
