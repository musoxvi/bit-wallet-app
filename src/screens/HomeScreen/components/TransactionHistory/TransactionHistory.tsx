import React, {useContext} from 'react';
import {View} from 'react-native';

import {CustomText} from '../../../../components/Text';
import {useTransactionHistory} from './TransactionHistory.hooks';
import SearchEmpty from '../../../../assets/icons/search-empty.svg';
import {EMPTY_IMG_SIZE, styles} from './TransactionHistory.styles';
import {TransactionDetailsBottomSheet} from '../TransactionDetailsButtomSheet';
import {Context} from '../../../../context/context';

export const TransactionHistory: React.FC = () => {
  const {state} = useContext(Context);
  const {transactions} = state || {};
  const {renderItem, bottomSheetRef, selectedTransaction, isOpen, setIsOpen} =
    useTransactionHistory();
  const transactionLength = transactions.length;

  return (
    <View>
      {transactionLength ? (
        transactions.map((item, index) =>
          renderItem(item, index + 1, transactionLength),
        )
      ) : (
        <View style={styles.emptyContainer}>
          <CustomText type="body3" style={styles.emptyText}>
            No transactions found
          </CustomText>
          <SearchEmpty width={EMPTY_IMG_SIZE} height={EMPTY_IMG_SIZE} />
        </View>
      )}
      {isOpen && (
        <TransactionDetailsBottomSheet
          modalRef={bottomSheetRef}
          setOpenState={setIsOpen}
          selectedTransaction={selectedTransaction}
        />
      )}
    </View>
  );
};
