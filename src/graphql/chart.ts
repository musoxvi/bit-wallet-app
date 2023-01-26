import {gql} from '@apollo/client';

export const GET_CHART_DATA = gql`
  query {
    getCoinGeckoPrices {
      timestamp
      value
    }
  }
`;
