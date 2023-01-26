import { RouteProp } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? {screen: K; params?: ParamList[K]; initial?: boolean}
    : {screen: K; params: ParamList[K]; initial?: boolean};
}[keyof ParamList];

export type BitWalletStackParamList = {
  HomeScreen: undefined;
  CashOutScreen: {
    balance: 
  };
};

// Navigation Props for Bit Wallet APP
export type BitWalletStackNavigationProp<
  Route extends keyof BitWalletStackParamList,
> = StackNavigationProp<BitWalletStackParamList, Route>;


export type BitWalletStackScreenProps<
  Route extends keyof BitWalletStackParamList,
> = {
  navigation: BitWalletStackNavigationProp<Route>;
  route: RouteProp<BitWalletStackParamList, Route>;
};