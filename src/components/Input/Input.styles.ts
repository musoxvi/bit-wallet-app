import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../theme/colors';
import {spacing} from '../../utils/spacing';

export const EXCLAMATION_ICON = normalize(20);

export const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.grey.light,
    marginTop: normalize(5),
  },
  noErrorContainer: {
    marginBottom: normalize(12),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: normalize(35),
    padding: 0,
    color: colors.neutral.white,
    paddingLeft: spacing(1),
  },
  errorContainer: {
    minHeight: normalize(25),
    paddingTop: normalize(4),
    paddingLeft: spacing(1),
    marginBottom: spacing(1),
    alignSelf: 'flex-start',
  },
  errorContainerWithIconStyle: {
    flexDirection: 'row',
    marginRight: spacing(1),
    alignItems: 'center',
  },
  error: {
    flexShrink: 1,
    marginLeft: spacing(0.5),
  },
  noMultiline: {
    marginVertical: spacing(0.5),
  },
  multiline: {
    height: normalize(35),
  },
  hideShowError: {
    display: 'none',
  },
});
