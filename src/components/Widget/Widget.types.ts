import {StyleProp, ViewStyle} from 'react-native';

export interface IWidgetProps {
  title?: string;
  titleAlign?: 'left' | 'right' | 'center';
  style?: StyleProp<ViewStyle>;
  headerStyles?: ViewStyle;
  testId?: string;
  children: React.ReactNode;
  contentStyle?: ViewStyle;
  containerStyles?: ViewStyle;
  colors?: string[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
}
