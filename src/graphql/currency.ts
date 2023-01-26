import {gql} from '@apollo/client';

export const GET_CURRENCY_DATA = gql`
  query {
    getCurrency {
      base
      names {
        ARS {
          name
          symbol
        }
        USD {
          name
          symbol
        }
      }
      rates {
        ARS_BUY
        ARS_SELL
        USD_BUY
        USD_SELL
      }
      variation {
        ARS
        USD
      }
    }
  }
`;
