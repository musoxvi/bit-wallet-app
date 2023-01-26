import {ECurrency} from '../types/currency';
import {NAMES} from './names';
import {State} from './types';

export const initialState: State = {
  loading: true,
  balance: {
    accountId: '',
    balance: '0.00',
    currency: ECurrency.BTC,
  },
  bitcoinFees: {
    fastestFee: 0,
    halfHourFee: 0,
    hourFee: 0,
  },
  rates: undefined,
  variation: undefined,
  transactions: [],
};

const {
  SET_BALANCE,
  SET_LOADING,
  SET_BITCOIN_FEES,
  SET_RATES,
  SET_VARIATION,
  SET_TRANSACTIONS,
} = NAMES;

export function reducer(state: State, action: any): State {
  const {type, balance, loading, bitcoinFees, rates, variation, transactions} =
    action || {};

  switch (type) {
    case SET_BALANCE:
      return {
        ...state,
        balance,
      };
    case SET_LOADING:
      return {
        ...state,
        loading,
      };
    case SET_BITCOIN_FEES:
      return {
        ...state,
        bitcoinFees,
      };
    case SET_RATES:
      return {
        ...state,
        rates,
      };
    case SET_VARIATION:
      return {
        ...state,
        variation,
      };
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions,
      };

    default: {
      // helps us avoid typos!
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
