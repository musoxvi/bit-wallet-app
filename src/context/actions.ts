import {IRates, Variation} from '../types/currency';
import {NAMES} from './names';
import {Balance, ITransactions, TBitcoinFees} from './types';

function setBalance(balance: Balance) {
  return {
    type: NAMES.SET_BALANCE,
    balance,
  };
}

function setLoading(loading: boolean) {
  return {
    type: NAMES.SET_LOADING,
    loading,
  };
}

function setBitcoinFees(bitcoinFees: TBitcoinFees) {
  return {
    type: NAMES.SET_BITCOIN_FEES,
    bitcoinFees,
  };
}

function setRates(rates: IRates) {
  return {
    type: NAMES.SET_RATES,
    rates,
  };
}
function setVariation(variation: Variation) {
  return {
    type: NAMES.SET_VARIATION,
    variation,
  };
}

function setTransactions(transactions: ITransactions[]) {
  return {
    type: NAMES.SET_TRANSACTIONS,
    transactions,
  };
}

export const actions = {
  setBalance,
  setLoading,
  setBitcoinFees,
  setRates,
  setVariation,
  setTransactions,
};
