export enum ECurrency {
  ARS = 'ARS',
  BTC = 'BTC',
  USD = 'USD',
}

export interface Variation {
  [key: string]: number;
}

export interface Currency {
  base: string;
  names: {[key: string]: Name};
  rates: IRates;
  variation: Variation;
}

export interface Name {
  name: string;
  symbol: string;
}

export interface IRates {
  ARS_BUY: number;
  ARS_SELL: number;
  USD_BUY: number;
  USD_SELL: number;
}
