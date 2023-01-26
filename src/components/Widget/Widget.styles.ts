import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {spacing} from '../../utils/spacing';

export const gradientColors = [colors.grey.dark, colors.neutral.black];

export const widgetStyles = StyleSheet.create({
  container: {
    marginBottom: spacing(2),
    marginHorizontal: spacing(2),
    backgroundColor: colors.institutional.purple.main,
    borderRadius: spacing(2),
  },
  header: {
    padding: spacing(2),
    paddingBottom: spacing(1),
  },
  headerRight: {
    position: 'absolute',
    right: spacing(2),
    top: spacing(2),
  },
});
