import React, {useRef} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleProp,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomText} from '../../components/Text';

// Icons
import BitcoinIcon from '../../assets/icons/bitcoin.svg';
import ChevronLeft from '../../assets/icons/chevronLeft.svg';

import {Separator} from '../../components/Separator/Separator';
import {
  NAVIGATION_ICON_HEIGHT,
  NAVIGATION_ICON_WIDTH,
  styles,
} from './CashOutScreen.styles';
import {ECurrency} from '../../types/currency';
import {CustomInput} from '../../components/Input/Input';
import {useCashOutCryptoEntry} from './hooks/useCashOutCryptoEntry';
import {spacing} from '../../utils/spacing';
import {BitWalletStackScreenProps} from '../../navigation/navigation.type';
import {colors} from '../../theme/colors';
import {CustomButton} from '../../components/Button';
import {ConfirmationBottomModal} from './components/ConfirmationButtomSheet/ConfirmationBottomModal';
export const CashOutScreen: React.FC<
  BitWalletStackScreenProps<'CashOutScreen'>
> = ({route, navigation}) => {
  const addressInputRef = useRef<TextInput>(null);
  const amountInputRef = useRef<TextInput>(null);
  const {balance} = route?.params;

  const {
    dataToConfirm,
    canContinue,
    fee,
    amount,
    address,
    addressErrorMessage,
    amountErrorMessage,
    openDropDownPicker,
    selectedFee,
    displayBalance,
    amountToSend,
    bottomSheetRef,
    isOpen,
    dropDownPickerData,
    rates,
    setIsOpen,
    setFee,
    onChangeAddressInput,
    onChangeAmountInput,
    setOpenDropDownPicker,
    onContinue,
  } = useCashOutCryptoEntry(balance);

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar animated backgroundColor={colors.neutral.black} />
      <View style={styles.header}>
        <Pressable onPress={navigation.goBack}>
          <ChevronLeft
            width={NAVIGATION_ICON_WIDTH}
            height={NAVIGATION_ICON_HEIGHT}
            style={{color: colors.neutral.white} as StyleProp<ViewStyle>}
          />
        </Pressable>
        <CustomText type="h3" style={styles.textHeader}>
          Send {ECurrency.BTC}
        </CustomText>
        <View />
      </View>
      <Separator />
      <View style={styles.flex1}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.iconBTC}>
              <BitcoinIcon width={80} height={80} />
            </View>

            <View style={styles.amountBox}>
              <CustomText
                style={amountErrorMessage ? styles.errorText : {}}
                type="h4">
                Current balance
              </CustomText>
              <CustomText
                style={amountErrorMessage ? styles.errorText : {}}
                type="h4">
                {` ${displayBalance} ${ECurrency.BTC}`}
              </CustomText>
            </View>

            <View style={styles.centerBox}>
              <CustomInput
                inputRef={addressInputRef}
                label="Address"
                keyboardType={
                  Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password'
                }
                autoCapitalize="none"
                autoComplete="off"
                value={address}
                autoCorrect={false}
                isInputEmpty={!address}
                onChangeText={onChangeAddressInput}
                errorMsg={addressErrorMessage}
                showError={Boolean(
                  address.length > 25 && addressErrorMessage.length,
                )}
                placeholder={'Destination address'}
                maxLength={38}
              />
            </View>

            <CustomInput
              inputRef={amountInputRef}
              autoComplete="off"
              label="Amount"
              keyboardType="decimal-pad"
              value={amount}
              onChangeText={onChangeAmountInput}
              placeholder="Enter the amount to send"
              errorMsg={amountErrorMessage}
              showError={!!amountErrorMessage.length}
              maxLength={15}
              isInputEmpty={!!amount.length}
              rightAccessory={
                <BitcoinIcon width={spacing(3)} height={spacing(3)} />
              }
            />

            <DropDownPicker
              dropDownDirection="TOP"
              showBadgeDot={true}
              listMode="SCROLLVIEW"
              open={openDropDownPicker}
              value={fee}
              items={dropDownPickerData}
              setOpen={setOpenDropDownPicker}
              setValue={setFee}
              placeholder="Select an fee"
            />
          </View>

          <View style={styles.transactionDetails}>
            <View style={styles.feeBox}>
              <CustomText type="h4">Address</CustomText>
              <CustomText type="h4">{address ? address : '--'}</CustomText>
            </View>
            <View style={styles.feeBox}>
              <CustomText type="h4">Transaction fee</CustomText>
              <CustomText type="h4">
                {` ${selectedFee} ${ECurrency.BTC}`}
              </CustomText>
            </View>
            <View style={styles.feeBox}>
              <CustomText type="h4">Amount to Send</CustomText>
              <CustomText type="h4">{amountToSend}</CustomText>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.confirmButtonWrapper}>
        <CustomButton
          disabled={canContinue}
          onPress={onContinue}
          title="Continue"
        />
      </View>

      {isOpen && (
        <ConfirmationBottomModal
          modalRef={bottomSheetRef}
          setOpenState={setIsOpen}
          dataToConfirm={dataToConfirm}
          rates={rates}
        />
      )}
    </SafeAreaView>
  );
};
