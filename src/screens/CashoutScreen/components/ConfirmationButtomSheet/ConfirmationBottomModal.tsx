import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Lottie from 'lottie-react-native';
import {useMutation} from '@apollo/client';
// Components
import {BottomSheet} from '../../../../components/BottomSheet/BottomSheet';
import {CustomText} from '../../../../components/Text';
import {EBottomSheetIndex} from '../../../../components/BottomSheet/BottomSheet.types';
import {Separator} from '../../../../components/Separator/Separator';
import {CustomButton} from '../../../../components/Button';
// Utils
import {amountFormatter} from '../../../../utils/currency';
//Types
import {ECurrency} from '../../../../types/currency';
import {IConfirmationBottomModal} from './ConfirmationBottomModal.types';
// Icons
import BitcoinIcon from '../../../../assets/icons/bitcoin.svg';
// Styles
import {ICON_SIZE, styles} from './ConfirmationBottomModal.styles';
// GQL
import {
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
} from '../../../../graphql/transactions';
import {EConfirmationStatus} from '../../../../types/transaction';
import {confirmationBottomModalTitle} from './ConfirmationBottomModal.strings';
import {BitWalletStackNavigationProp} from '../../../../navigation/navigation.type';
import {GET_BALANCE, UPDATE_BALANCE} from '../../../../graphql/balance';
import {normalizeAmount} from '../../../../utils/strings';

const getRandom = () => Math.random() < 0.5;

export const ConfirmationBottomModal: React.FC<IConfirmationBottomModal> = ({
  modalRef,
  dataToConfirm,
  rates,
  setOpenState,
}) => {
  const navigation =
    useNavigation<BitWalletStackNavigationProp<'HomeScreen'>>();
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState<EConfirmationStatus>();

  const isSuccess = status === EConfirmationStatus.SUCCESS;

  // Apollo  Mutations
  const [addTransaction] = useMutation(ADD_TRANSACTION, {
    refetchQueries: [{query: GET_TRANSACTIONS}],
  });

  const [updateBalance] = useMutation(UPDATE_BALANCE, {
    refetchQueries: [{query: GET_BALANCE}],
  });

  const conversionRate = rates ? rates?.ARS_BUY : 1;

  const handleSubmit = async () => {
    const state = getRandom()
      ? EConfirmationStatus.FAILED
      : EConfirmationStatus.SUCCESS;
    setStatus(undefined);

    try {
      addTransaction({
        variables: {
          input: {
            state,
            address: dataToConfirm?.address?.toString(),
            amount: dataToConfirm?.amount?.toString(),
            fee: dataToConfirm?.fee?.toString(),
          },
        },
      });
    } catch (_error) {
      console.error('add transaction error:', _error);
    } finally {
      setTimeout(function () {
        setStatus(state);
      }, 4000);

      setShowStatus(true);

      if (
        state === EConfirmationStatus.SUCCESS &&
        dataToConfirm &&
        dataToConfirm?.amount
      ) {
        setTimeout(function () {
          updateBalance({
            variables: {
              input: {
                balance: normalizeAmount(dataToConfirm?.amount || '1'),
                currency: ECurrency.BTC,
              },
            },
          });
          navigation.navigate('HomeScreen');
        }, 9000);
      }
    }
  };

  return (
    <BottomSheet
      initialIndex={EBottomSheetIndex.INIT}
      bottomSheeRef={modalRef}
      setOpenState={setOpenState}
      body={
        <View style={styles.container}>
          <View style={[styles.centered, styles.header]}>
            {showStatus && (
              <>
                {status && (
                  <CustomText type="h3">{`${confirmationBottomModalTitle[status]}`}</CustomText>
                )}
                <View style={styles.lottieSuccess}>
                  {status === EConfirmationStatus.SUCCESS ? (
                    <Lottie
                      source={require('../../../../assets/lottie/success.json')}
                      autoPlay
                      loop
                    />
                  ) : status === EConfirmationStatus.FAILED ? (
                    <Lottie
                      source={require('../../../../assets/lottie/failed.json')}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Lottie
                      source={require('../../../../assets/lottie/bitcoin-rocket.json')}
                      autoPlay
                      loop
                    />
                  )}
                </View>
              </>
            )}
          </View>

          {!showStatus && (
            <View style={styles.container}>
              <View style={[styles.centered, styles.header]}>
                <View style={styles.lottie}>
                  <Lottie
                    source={require('../../../../assets/lottie/review-ratings.json')}
                    autoPlay
                    loop
                  />
                </View>
                <View>
                  <View style={styles.row}>
                    <CustomText type="h1">{`${dataToConfirm?.amount} `}</CustomText>

                    <BitcoinIcon width={ICON_SIZE} height={ICON_SIZE} />
                  </View>
                  <CustomText type="body3" style={styles.amountArs}>
                    {`≈ ${amountFormatter({
                      value:
                        Number(dataToConfirm?.amount?.replace(',', '.')) *
                        conversionRate,
                    })} $`}
                  </CustomText>
                </View>
              </View>
              <Separator />
              <View style={styles.column}>
                <CustomText type="h4">Address:</CustomText>
                <CustomText type="body4">
                  {dataToConfirm?.address ?? ''}
                </CustomText>
              </View>
              <View style={styles.column}>
                <CustomText type="h4">Fee:</CustomText>
                <CustomText type="body4">{dataToConfirm?.fee ?? ''}</CustomText>
              </View>
              <View style={styles.column}>
                <CustomText type="h4">Network:</CustomText>
                <CustomText type="body4">{ECurrency.BTC}</CustomText>
              </View>
              <View>
                <CustomButton title="Confirm" onPress={handleSubmit} />
              </View>
            </View>
          )}

          {!isSuccess && showStatus && status && (
            <View>
              <CustomButton title="Try again" onPress={handleSubmit} />
            </View>
          )}
        </View>
      }
    />
  );
};
