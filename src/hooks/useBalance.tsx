import {useQuery} from '@apollo/client';
import {useEffect} from 'react';
import {TDispatchProps} from '../context/types';

import {GET_BALANCE} from '../graphql/balance';

export const useBalance = (dispatch: TDispatchProps) => {
  const {data} = useQuery(GET_BALANCE);
  const {balance} = data || {};

  useEffect(() => {
    if (balance) {
      dispatch.setBalance({
        balance: balance[0].balance,
        currency: balance[0].currency,
        accountId: balance[0].accountId,
      });
    }
  }, [balance, dispatch]);
};
