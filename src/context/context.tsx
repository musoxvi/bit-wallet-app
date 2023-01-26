import React, {createContext, useReducer, FC, ReactNode, useMemo} from 'react';
import {useBalance} from '../hooks/useBalance';
import {useCurrency} from '../hooks/useCurrency';
import {useFees} from '../hooks/useFees';
import {useTransactions} from '../hooks/useTransactions';
import {IRates, Variation} from '../types/currency';
import {actions} from './actions';
import {initialState, reducer} from './reducers';
import {Balance, ContextProps, ITransactions, TBitcoinFees} from './types';

export const Context = createContext({} as ContextProps);

type Props = {children: ReactNode};

export const Provider: FC<Props> = ({children}) => {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = useMemo(
    () => ({
      setBalance(_balance: Balance) {
        setState(actions.setBalance(_balance));
      },
      setLoading(_loading: boolean) {
        setState(actions.setLoading(_loading));
      },
      setBitcoinFees(bitcoinFees: TBitcoinFees) {
        setState(actions.setBitcoinFees(bitcoinFees));
      },
      setRates(rates: IRates) {
        setState(actions.setRates(rates));
      },
      setVariation(variation: Variation) {
        setState(actions.setVariation(variation));
      },
      setTransactions(transactions: ITransactions[]) {
        setState(actions.setTransactions(transactions));
      },
    }),
    [],
  );

  useBalance(dispatch);
  useFees(dispatch);
  useCurrency(dispatch);
  useTransactions(dispatch);

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};
