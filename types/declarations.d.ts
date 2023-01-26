declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<
    SvgProps & {
      fillSecondary?: string;
      fillTertiary?: string;
    }
  >;
  // eslint-disable-next-line import/no-default-export
  export default content;
}

declare module 'light-bolt11-decoder';

declare module '@storybook/addon-ondevice-knobs';
