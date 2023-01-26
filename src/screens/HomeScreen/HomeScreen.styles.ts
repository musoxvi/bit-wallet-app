import {Dimensions, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/colors';
import {spacing} from '../../utils/spacing';

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const headerStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.onSurface[200],
    position: 'absolute',
    top: -SCREEN_WIDTH + 200,
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH + 100,
    transform: [{rotate: '-100deg'}],
    borderTopLeftRadius: Math.round(SCREEN_WIDTH + SCREEN_WIDTH),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    height: normalize(200),
    width: '100%',
  },
});

export const balanceStyles = StyleSheet.create({
  container: {
    marginTop: spacing(1),
  },
  balanceLabel: {
    marginLeft: spacing(0.5),
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing(0.5),
  },
  conversionLabel: {
    color: colors.grey.light,
    marginLeft: spacing(3),
  },
});

export const actionButtonsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: spacing(2),
    paddingBottom: spacing(2),
  },
  sendIcon: {
    transform: [{rotate: '45deg'}],
  },
  depositIcon: {
    transform: [{rotate: '-145deg'}],
  },
  button: {
    width: '40%',
  },
});
