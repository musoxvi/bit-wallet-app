import {ECurrency, IRates, Variation} from '../types/currency';
import {EConfirmationStatus} from '../types/transaction';
import {NAMES} from './names';

export type Balance = {
  accountId: string;
  balance: string;
  currency: string;
};

export type TBitcoinFees = {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
};

export interface ITransactions {
  address: string;
  amount: string;
  state: keyof typeof EConfirmationStatus;
  timestamp: number;
  operationType: 'DEBIT';
  currency: ECurrency;
  network: 'BTC';
  id: string;
  fee: string | number;
  balance?: string | number;
}

// // // // // // // // // // // //

export interface State {
  loading: boolean;
  balance: Balance;
  bitcoinFees: TBitcoinFees;
  rates?: IRates;
  variation?: Variation;
  transactions: ITransactions[];
}

interface ActionSetBalance {
  type: NAMES.SET_BALANCE;
  balance: Balance;
}

interface ActionSetLoading {
  type: NAMES.SET_LOADING;
  loading: boolean;
}

interface ActionSetBitcoinFees {
  type: NAMES.SET_BITCOIN_FEES;
  bitcoinFees: boolean;
}

interface ActionSetRates {
  type: NAMES.SET_RATES;
  rates: IRates;
}

export type Action =
  | ActionSetBalance
  | ActionSetLoading
  | ActionSetBitcoinFees
  | ActionSetRates;

export type TDispatchProps = {
  setBalance(balance: Balance): void;
  setLoading(loading: boolean): void;
  setBitcoinFees(bitcoinFees: TBitcoinFees): void;
  setRates(rates: IRates): void;
  setVariation(variation: Variation): void;
  setTransactions(transactions: ITransactions[]): void;
};

export type ContextProps = {
  state: State;
  dispatch: TDispatchProps;
};
