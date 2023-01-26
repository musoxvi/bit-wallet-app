import React, {Fragment, useCallback, useContext, useState} from 'react';
import {Pressable, View} from 'react-native';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';

import SuccessIcon from '../../../../assets/icons/status-success.svg';
import ErrorIcon from '../../../../assets/icons/status-error.svg';
import {ICON_SIZE, styles} from './TransactionHistory.styles';
import {Separator} from '../../../../components/Separator/Separator';
import {CustomText} from '../../../../components/Text';
import {EConfirmationStatus} from '../../../../types/transaction';
import {historyConfirmationTitle} from './TransactionHistory.string';
import {amountFormatter} from '../../../../utils/currency';
import {useBottomModals} from '../../../../components/BottomSheet';
import {ITransactions} from '../../../../context/types';
import {Context} from '../../../../context/context';

export const useTransactionHistory = () => {
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransactions>();
  const {
    openState: {isOpen, setIsOpen},
    ref,
    open,
  } = useBottomModals();
  const {state} = useContext(Context);
  const rates = state?.rates?.ARS_BUY || 1;

  const renderItem = useCallback(
    (item: ITransactions, index: number, transactionLength: number) => {
      const formattedDate = format(
        fromUnixTime(+item?.timestamp.toString().slice(0, 10)),
        'dd/MM/yy - hh:mm',
      );

      const onPress = () => {
        open();
        setSelectedTransaction(item);
      };

      return (
        <Fragment key={index}>
          <Pressable onPress={onPress} style={styles.item}>
            <View style={styles.leftContent}>
              <View style={styles.icon}>
                {item.state === EConfirmationStatus.SUCCESS ? (
                  <SuccessIcon width={ICON_SIZE} height={ICON_SIZE} />
                ) : (
                  <ErrorIcon width={ICON_SIZE} height={ICON_SIZE} />
                )}
              </View>
              <View>
                <CustomText>{historyConfirmationTitle[item.state]}</CustomText>
                <CustomText>{formattedDate}</CustomText>
              </View>
            </View>

            <View style={styles.rightContent}>
              <CustomText type="h4">
                {` ${item.amount} ${item.currency}`}
              </CustomText>
              <CustomText type="body5">
                {`≈ ${amountFormatter({
                  value: Number(item.amount?.replace(',', '.')) * rates,
                })} $`}
              </CustomText>
            </View>
          </Pressable>

          {transactionLength !== index && <Separator />}
        </Fragment>
      );
    },
    [open, rates],
  );

  return {
    bottomSheetRef: ref,
    isOpen,
    setIsOpen,
    renderItem,
    selectedTransaction,
    styles,
  };
};
