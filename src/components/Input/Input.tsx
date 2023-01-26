import React from 'react';
import {TextInput, View} from 'react-native';
import {colors} from '../../theme/colors';
import Exclamation from '../../assets/icons/exclamationCircle.svg';
import {CustomText} from '../Text';

import {EXCLAMATION_ICON, styles} from './Input.styles';
import {IInputProps} from './Input.types';

export const CustomInput: React.FC<IInputProps> = ({
  label,
  errorMsg = '',
  errorLabelStyle = {},
  hintMsg = '',
  leftAccessory,
  disabled,
  isInputEmpty,
  rightAccessory,
  showError = false,
  inputRef,
  multiline,
  ...props
}) => {
  const isError = errorMsg.length > 1;
  const showInputMessage = errorMsg || typeof hintMsg === 'string';

  return (
    <>
      <View style={[styles.container, !showError && styles.noErrorContainer]}>
        {!!label && (
          <CustomText
            style={[disabled ? {color: colors.notification.error} : {}]}>
            {label}
          </CustomText>
        )}
        <View style={styles.inputContainer}>
          {!!leftAccessory && leftAccessory}
          <View style={styles.flex1}>
            {
              <TextInput
                ref={inputRef}
                style={[
                  styles.input,
                  multiline ? styles.multiline : styles.noMultiline,
                ]}
                placeholderTextColor={'orange'}
                {...props}
              />
            }
          </View>
          {!!rightAccessory && isInputEmpty && rightAccessory}
        </View>
      </View>
      <View
        style={[
          styles.errorContainer,
          showError ? styles.errorContainerWithIconStyle : null,
          !showError && styles.hideShowError,
        ]}>
        {isError && (
          <Exclamation
            color={colors.notification.error}
            width={EXCLAMATION_ICON}
            height={EXCLAMATION_ICON}
          />
        )}
        {showInputMessage && (
          <CustomText
            style={[
              styles.error,
              {...errorLabelStyle},
              {
                color: isError ? colors.notification.error : colors.grey.dark,
              },
            ]}>
            {isError ? errorMsg : hintMsg}
          </CustomText>
        )}
      </View>
    </>
  );
};
