import {gql} from '@apollo/client';

export const GET_BALANCE = gql`
  query {
    balance {
      accountId
      balance
      currency
    }
  }
`;

export const UPDATE_BALANCE = gql`
  mutation updateBalance($input: BalanceInput) {
    updateBalance(input: $input) {
      balance
      currency
    }
  }
`;
