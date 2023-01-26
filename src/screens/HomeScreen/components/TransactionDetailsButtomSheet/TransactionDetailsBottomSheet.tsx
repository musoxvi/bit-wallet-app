import React from 'react';
import {View} from 'react-native';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';

import {ITransactionDetailsBottomSheet} from './TransactionDetailsBottomSheet.types';
import {BottomSheet} from '../../../../components/BottomSheet/BottomSheet';
import {CustomText} from '../../../../components/Text';
import {EBottomSheetIndex} from '../../../../components/BottomSheet/BottomSheet.types';
import {Separator} from '../../../../components/Separator/Separator';
import {ICON_STATUS_SIZE, styles} from './TransactionDetailsBottomSheet.styles';
// Icons
import BitcoinIcon from '../../../../assets/icons/bitcoin.svg';
import SuccessIcon from '../../../../assets/icons/status-success.svg';
import ErrorIcon from '../../../../assets/icons/status-error.svg';
import {EConfirmationStatus} from '../../../../types/transaction';

export const TransactionDetailsBottomSheet: React.FC<
  ITransactionDetailsBottomSheet
> = ({modalRef, selectedTransaction, setOpenState}) => {
  const isSuccess = selectedTransaction?.state === EConfirmationStatus.SUCCESS;

  const formattedDate = format(
    fromUnixTime(selectedTransaction?.timestamp.slice(0, 10)),
    'dd/MM/yy - hh:mm:ss',
  );

  return (
    <BottomSheet
      initialIndex={EBottomSheetIndex.INIT}
      bottomSheeRef={modalRef}
      setOpenState={setOpenState}
      body={
        <View style={styles.container}>
          <View style={styles.row}>
            <BitcoinIcon />
            <View style={styles.headerDetail}>
              <CustomText type="h3">
                {`${selectedTransaction?.amount} ${
                  selectedTransaction?.currency ?? ''
                }`}
              </CustomText>
              <CustomText type="body4">
                {selectedTransaction?.operationType}
              </CustomText>
              <CustomText type="body4">{formattedDate}</CustomText>
            </View>
          </View>
          <Separator />
          <View style={styles.row}>
            {isSuccess ? (
              <SuccessIcon width={ICON_STATUS_SIZE} height={ICON_STATUS_SIZE} />
            ) : (
              <ErrorIcon width={ICON_STATUS_SIZE} height={ICON_STATUS_SIZE} />
            )}
            <View style={styles.headerDetail}>
              <CustomText type="h4">
                {selectedTransaction?.state ?? ''}
              </CustomText>
              <CustomText type="body4">
                {isSuccess
                  ? 'Your transaction was successful!'
                  : 'Your transaction was failed.'}
              </CustomText>
            </View>
          </View>
          <Separator />
          <View style={styles.column}>
            <CustomText type="h4">Address</CustomText>
            <CustomText type="body4">
              {selectedTransaction?.address ?? ''}
            </CustomText>
          </View>
          <View style={styles.column}>
            <CustomText type="h4">Transaction Hash</CustomText>
            <CustomText type="body4">
              {selectedTransaction?.id ?? ''}
            </CustomText>
          </View>
          <View style={styles.column}>
            <CustomText type="h4">Transaction Fee</CustomText>
            <CustomText type="body4">
              {` ${selectedTransaction?.fee ?? 0} ${
                selectedTransaction?.currency ?? ''
              }`}
            </CustomText>
          </View>
        </View>
      }
    />
  );
};
