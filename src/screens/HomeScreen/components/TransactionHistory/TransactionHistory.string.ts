import {
  EConfirmationStatus,
  TConfirmationMessage,
} from '../../../../types/transaction';

export const historyConfirmationTitle: TConfirmationMessage = {
  [EConfirmationStatus.SUCCESS]: 'Successful',
  [EConfirmationStatus.FAILED]: 'Failed transaction',
};
