import {useQuery} from '@apollo/client';
import {useEffect} from 'react';
import {ITransactions, TDispatchProps} from '../context/types';
import {GET_TRANSACTIONS} from '../graphql/transactions';

export const useTransactions = (dispatch: TDispatchProps) => {
  const {data} = useQuery(GET_TRANSACTIONS);

  useEffect(() => {
    if (data) {
      const transactions: ITransactions[] = data.transactions;
      const normalizeTransactionsData = transactions
        .map((transaction: ITransactions) => ({
          address: transaction.address,
          amount: transaction.amount,
          state: transaction.state,
          timestamp: transaction.timestamp,
          operationType: transaction.operationType,
          currency: transaction.currency,
          network: transaction.network,
          id: transaction.id,
          fee: transaction.fee,
        }))
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 5);

      dispatch.setTransactions(normalizeTransactionsData);
    }
  }, [data, dispatch]);
};
