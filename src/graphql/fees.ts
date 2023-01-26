import {gql} from '@apollo/client';

export const GET_BITCOIN_FEES = gql`
  query {
    getBitcoinFees {
      fastestFee
      halfHourFee
      hourFee
    }
  }
`;
