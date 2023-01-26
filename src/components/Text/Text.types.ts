import {TextProps, TextStyle} from 'react-native/types';

export enum ETextType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  body1 = 'body1',
  body2 = 'body2',
  body3 = 'body3',
  body4 = 'body4',
  body5 = 'body5',
}

export type CustomTextProps = {
  textColor?: string;
  type?: keyof typeof ETextType;
  style?: TextStyle | TextStyle[];
} & TextProps;
