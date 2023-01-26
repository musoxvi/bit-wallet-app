import {StyleSheet} from 'react-native';

const FONT_SIZES = {
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
};

export const textStyles = StyleSheet.create({
  h1: {
    fontFamily: 'Lato-Black',
    fontSize: FONT_SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: 'Lato-Bold',
    fontSize: FONT_SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: 'Lato-Bold',
    fontSize: FONT_SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: 'Lato-Bold',
    fontSize: FONT_SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontFamily: 'Lato-Regular',
    fontSize: FONT_SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Lato-Regular',
    fontSize: FONT_SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Lato-Regular',
    fontSize: FONT_SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Lato-Regular',
    fontSize: FONT_SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Lato-Regular',
    fontSize: FONT_SIZES.body5,
    lineHeight: 22,
  },
});
