import {Dimensions} from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const KEYBOARD_HEIGHT_FACTOR = WINDOW_HEIGHT > 550 ? 0.4 : 0.35;
const KEYBOARD_MAX_HEIGHT = 280;

export const getNewKeyboardHeight: (
  inputScreenHeight?: number,
) => number = inputScreenHeight => {
  const screenHeight = inputScreenHeight ? inputScreenHeight : WINDOW_HEIGHT;
  const proposedHeight = Math.floor(screenHeight * KEYBOARD_HEIGHT_FACTOR);

  return proposedHeight > KEYBOARD_MAX_HEIGHT
    ? KEYBOARD_MAX_HEIGHT
    : proposedHeight;
};
