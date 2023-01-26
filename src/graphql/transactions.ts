import {gql} from '@apollo/client';

export const GET_TRANSACTIONS = gql`
  query {
    transactions {
      address
      amount
      state
      timestamp
      operationType
      currency
      network
      fee
      id
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation addTransaction($input: TransactionInput) {
    addTransaction(input: $input) {
      state
      address
      amount
      fee
    }
  }
`;
