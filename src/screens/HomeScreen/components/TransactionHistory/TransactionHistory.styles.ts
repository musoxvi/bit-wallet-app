import {StyleSheet} from 'react-native';
import {spacing} from '../../../../utils/spacing';

export const ICON_SIZE = spacing(3);
export const EMPTY_IMG_SIZE = spacing(25);

export const styles = StyleSheet.create({
  rightContent: {
    alignItems: 'flex-end',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: spacing(3),
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: spacing(1),
    marginVertical: spacing(2),
    justifyContent: 'space-between',
  },
  emptyContainer: {
    alignItems: 'center',
    padding: spacing(2),
  },
  emptyText: {
    paddingBottom: spacing(3),
  },
  icon: {
    marginRight: spacing(1),
  },
});
