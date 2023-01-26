import {useQuery} from '@apollo/client';
import {useEffect} from 'react';
import {TDispatchProps} from '../context/types';
import {GET_BITCOIN_FEES} from '../graphql/fees';

export const useFees = (dispatch: TDispatchProps) => {
  const {data} = useQuery(GET_BITCOIN_FEES);
  const {getBitcoinFees} = data || {};

  useEffect(() => {
    if (getBitcoinFees) {
      dispatch.setBitcoinFees({
        fastestFee: getBitcoinFees.fastestFee + 50,
        halfHourFee: getBitcoinFees.halfHourFee,
        hourFee: getBitcoinFees.hourFee,
      });
    }
  }, [getBitcoinFees, dispatch]);
};
