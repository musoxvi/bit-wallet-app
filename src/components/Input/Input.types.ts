import React from 'react';
import {TextInput, TextInputProps, TextStyle} from 'react-native';

export interface IInputBaseProps {
  label?: string;
  errorMsg?: string;
  errorLabelStyle?: TextStyle;
  hintMsg?: string | React.ReactNode;
  leftAccessory?: React.ReactNode;
  disabled?: boolean;
  isInputEmpty?: boolean;
  rightAccessory?: React.ReactNode;
  showError?: boolean;
  showCounter?: boolean;
  inputRef?: React.RefObject<TextInput>;
}

export interface IInputProps extends IInputBaseProps, TextInputProps {
  inputRef?: React.RefObject<TextInput>;
}
