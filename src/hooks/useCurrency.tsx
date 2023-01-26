import {useQuery} from '@apollo/client';
import {useEffect} from 'react';
import {TDispatchProps} from '../context/types';
import {GET_CURRENCY_DATA} from '../graphql/currency';

export const useCurrency = (dispatch: TDispatchProps) => {
  const {data} = useQuery(GET_CURRENCY_DATA, {
    pollInterval: 60000,
  });

  useEffect(() => {
    if (data) {
      const rates = data?.getCurrency?.rates;
      const variation = data?.getCurrency?.variation;
      delete rates.__typename;
      delete variation.__typename;

      dispatch.setRates(data?.getCurrency?.rates);
      dispatch.setVariation(data?.getCurrency?.variation);
    }
  }, [data, dispatch]);
};
